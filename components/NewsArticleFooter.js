import { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import moment from 'moment'

class NewsArticleFooter extends Component {

  constructor (props) {
    super(props)

    this.NEWSARTICLES_QUERY = gql`
      query newsArticles {
        newsArticles  {
          slug
          id
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
          return <>
            <p>Loading...</p>
          </>
        } else {
          return <>
            {data.newsArticles.slice(0, newsArticleSize).map((newsArticle, index) => {
              return <li className="c-footer--upper__list--item" key={index}>
                <div className="c-footer--upper__list--item__news-article">
                  <div className="c-footer--upper__list--item__news-article--date">
                    <h5 className="c-footer--upper__list--item__news-article--date__item">{moment(newsArticle.createdAt).format('MMM Do')}</h5>
                  </div>
                  <div className="c-footer--upper__list--item__news-article--main">
                    <h5 className="c-footer--upper__list--item__news-article--main__title">{newsArticle.title}</h5>
                    <h5 className="c-footer--upper__list--item__news-article--main__body c-footer--upper__list--item-lineheight">{newsArticle.body}</h5>
                  </div>
                </div>
              </li>
            })}
          </>
        }
      }}
    </Query>
  }
}

export default NewsArticleFooter