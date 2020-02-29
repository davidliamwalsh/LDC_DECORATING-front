import { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import moment from 'moment'

class TestimonialCard extends Component {

  constructor (props) {
    super(props)

    this.TESTIMONIALS_QUERY = gql`
      query testimonials {
        testimonials  {
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

  truncate (string) {
    if (string.length > 99) {
      return `${string.substr(0, 99)} ...`
    } else {
      return string
    }
  }
  
  render () {
    const { testimonialSize } = this.props

    return <Query query={this.TESTIMONIALS_QUERY}>
      {({ loading, data }) => {
        if (loading) {
          return <>
            <p>Loading...</p>
          </>
        } else {
          return <>
            <div className="c-testimonialCard">
              {data.testimonials.slice(0, testimonialSize).map((testimonial, index) => {
                return <div key={index} className="c-testimonialCard__container">
                  <div className="c-testimonialCard__image">
                    <img className="c-testimonialCard__image--hero" src={`${process.env.BACKEND_URL}${testimonial.previewImage}`} />
                  </div>
                  <div className="c-testimonialCard__main">
                    <h5 className="c-testimonialCard__main--body">{this.truncate(testimonial.body)}</h5>
                    <h5 className="c-testimonialCard__main--date">{moment(testimonial.createdAt).format('MMMM Do YYYY')}</h5>
                    <hr className="o-line__testimonial" />
                    <h5 className="c-testimonialCard__main--title">{testimonial.title}</h5>
                  </div>
                </div>
              })}
            </div>
          </>
        }
      }}
    </Query>
  }
}

export default TestimonialCard