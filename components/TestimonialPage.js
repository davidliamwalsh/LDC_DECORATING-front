import { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import moment from 'moment'

class TestimonialPage extends Component {

  constructor (props) {
    super(props)

    this.TESTIMONIALS_QUERY = gql`
      query testimonials {
        testimonials  {
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
    const { testimonialSize } = this.props

    return <Query query={this.TESTIMONIALS_QUERY}>
      {({ loading, data }) => {
        if (loading) {
          return <>
            <p>Loading...</p>
          </>
        } else {
          return <>
            <div className='c-testimonials'>
              {data.testimonials.slice(0, testimonialSize).map((testimonial, index) => {
                return <div key={index}>
                  <h5>{testimonial.title}</h5>
                  <h5>{testimonial.body}</h5>
                  <h5>{moment(testimonial.createdAt).format('MMMM Do YYYY')}</h5>
                </div>
              })}
            </div>
          </>
        }
      }}
    </Query>
  }
}

export default TestimonialPage