import { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import moment from 'moment'
import { Facebook } from 'react-content-loader'

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
              <div className="o-section-head">
                <h4 className="o-section-head__title">
                  Latest News
                </h4>
              </div>
              <div className="o-section-head__line">
                <hr />
              </div>
              <div className="c-news-article-main__main">
                {data.newsArticles.slice(0, newsArticleSize).map((newsArticle, index) => {
                  return (
                    <li className="c-news-article-main__item" key={index} data-aos="flip-right">
                      <div className="c-news-article-main__item--inner">
                        <div className="c-news-article-main__item--inner-date">
                          <h5 className="c-news-article-main__item--inner-date__text">{moment(newsArticle.createdAt).format('MMM Do')}</h5>
                        </div>
                        <div className="c-news-article-main__item--inner-news">
                          <div className="c-news-article-main__item--inner-news__hero">
                            <img className="c-news-article-main__item--inner-news__hero_image" src={`${process.env.BACKEND_URL}${newsArticle.previewImage}`} />
                          </div>
                          <div className="c-news-article-main__item--inner-news__main">
                            <h5 className="c-news-article-main__item--inner-news__title">{newsArticle.title}</h5>
                            <hr className="c-news-article-main__item--inner-news__hr" />
                            <h5 className="c-news-article-main__item--inner-news__body">{newsArticle.body}</h5>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </div>
            </div>
          </div>
        }
      }}
    </Query>
  }
}

export default NewsArticleMain