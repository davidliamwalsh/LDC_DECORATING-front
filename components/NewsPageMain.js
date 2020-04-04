import { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import moment from 'moment'

class NewsPageMain extends Component {

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
          previewImage
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
            <div className="c-loader__container">
              <p>loading...</p>
            </div>
          )
        } else {
          return <div className="c-testimonial">
            {data.newsArticles.slice(0, newsArticleSize).map((newsArticle, index) => {
              return (
                <div className="c-testimonial__container" key={index} data-aos="fade-in">
                  <div className="c-testimonial__image">
                  <img className="c-testimonial__image--hero" src={`${process.env.BACKEND_URL}${newsArticle.previewImage}`} />
                  </div>
                  <div className="c-testimonial__main">
                    <h5 className="c-testimonial__main--body">{newsArticle.body}</h5>
                    <h5 className="c-testimonial__main--date">{moment(newsArticle.createdAt).format('MMMM Do YYYY')}</h5>
                    <hr className="o-line__testimonial" />
                    <h5 className="c-testimonial__main--title">{newsArticle.title}</h5>
                  </div>
                </div>
              )
            })}
          </div>
        }
      }}
    </Query>
  }
}

export default NewsPageMain