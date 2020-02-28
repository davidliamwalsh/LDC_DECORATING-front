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
                return <div key={index}>
                  <img className="c-testimonialCard__" src={`${process.env.BACKEND_URL}${testimonial.previewImage}`} />
                  <h5 className="c-testimonialCard__">{testimonial.title}</h5>
                  <h5 className="c-testimonialCard__">{testimonial.body}</h5>
                  <h5 className="c-testimonialCard__">{moment(testimonial.createdAt).format('MMMM Do YYYY')}</h5>
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