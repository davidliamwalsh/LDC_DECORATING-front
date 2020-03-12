import { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import moment from 'moment'

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

    return <Query query={this.NEWSARTICLES_QUERY}>
      {({ loading, data }) => {
        if (loading) {
          return (
            <p>Loading...</p>
          )
        } else {
          return <div className="c-news-article-main">
            <div className="c-news-article-main__head">
              <h4 className="c-news-article-main__head--text">Latest News</h4>
              <hr className="c-news-article-main__head--line" />
            </div>
            <div className="c-news-article-main__container">
              {data.newsArticles.slice(0, newsArticleSize).map((newsArticle, index) => {
                return (
                  <li className="c-news-article-main__item" key={index} data-aos="flip-right">
                    <div className="c-news-article-main__item--inner">
                      <div className="c-news-article-main__item--inner-date">
                        <h5 className="c-news-article-main__item--inner-date__text">{moment(newsArticle.createdAt).format('MMM Do')}</h5>
                      </div>
                      <div className="c-news-article-main__item--inner-news">
                        <div className="c-news-article-main__item--inner-news__image">
                          <img className="c-news-article-main__item--inner-news__image_hero" src={`${process.env.BACKEND_URL}${newsArticle.previewImage}`} />
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
        }
      }}
    </Query>
  }
}

export default NewsArticleMain