import { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import moment from 'moment'
import { Facebook } from 'react-content-loader'
import Link from 'next/link'
import Slider from 'react-slick'

class NewsArticleMain extends Component {

  constructor (props) {
    super(props)

    this.NEWSARTICLES_QUERY = gql`
      query newsArticles {
        newsArticles  {
          slug
          id
          previewImage
          image
          title
          body
          createdAt
        }
      }
    `
  }

  render () {
    const settings = {
      className: "center",
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      speed:500,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    }

    const { newsArticleSize } = this.props
    const MyFacebookLoader = () => <Facebook />

    return <Query query={this.NEWSARTICLES_QUERY}>
      {({ loading, data }) => {
        if (loading) {
          return (
            <div className="c-loader__container">
              <MyFacebookLoader />
            </div>
          )
        } else {
          return <div className="c-news-article-main">
            <div className="c-container">
              <div className="o-section-head no-padding">
                <h4 className="o-section-head__title">
                  Latest News
                </h4>
                <Link href='/news'>
                  <a className="o-btn">View all</a>
                </Link>
              </div>
              <div className="o-section-head__line no-padding">
                <hr />
              </div>
              <div className="c-news-article-main__main">
              <Slider {...settings}>
                {data.newsArticles.slice(0, newsArticleSize).map((newsArticle, index) => {
                  return (
                    <div class="slider">
                      <div>
                        <div class="item">
                          <div className="c-news-article-main__item--inner-hero">
                            <img className="c-news-article-main__item--inner-hero__image" src={`${process.env.BACKEND_URL}${newsArticle.previewImage}`} />
                          </div>
                          <div className="c-news-article-main__item--inner-main">
                            <h5 className="c-news-article-main__item--inner-title">{newsArticle.title}</h5>
                            <h5 className="c-news-article-main__item--inner-body">{newsArticle.body}</h5>
                            <h5 className="c-news-article-main__item--inner-date">{moment(newsArticle.createdAt).format('MMM Do')}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
                </Slider>
              </div>
            </div>
          </div>
          
        }
      }}
    </Query>
  }
}

export default NewsArticleMain