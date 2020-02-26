import { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import moment from 'moment'

class NewsArticleCard extends Component {

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
            <div className='c-newsArticleCard'>
              {data.newsArticles.slice(0, newsArticleSize).map((newsArticle, index) => {
                return <div>
                  <h5>{newsArticle.title}</h5>
                  <h5>{newsArticle.body}</h5>
                  <h5>{moment(newsArticle.createdAt).format('MMMM Do YYYY')}</h5>
                </div>
              })}
            </div>
          </>
        }
      }}
    </Query>
  }
}

export default NewsArticleCard