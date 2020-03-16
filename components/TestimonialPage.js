import { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import moment from 'moment'
import { Facebook } from 'react-content-loader'

class TestimonialPage extends Component {

  constructor (props) {
    super(props)

    this.TESTIMONIALS_QUERY = gql`
      query testimonials {
        testimonials  {
          slug
          image
          previewImage
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
    const MyFacebookLoader = () => <Facebook />

    return <Query query={this.TESTIMONIALS_QUERY}>
      {({ loading, data }) => {
        if (loading) {
          return (
            <div className="c-loader__container">
              <MyFacebookLoader />
            </div>
          )
        } else {
          return <>
            <div className="c-testimonial">
              {data.testimonials.slice(0, testimonialSize).map((testimonial, index) => {
                return <div className="c-testimonial__container" key={index} data-aos="fade-in">
                  <div className="c-testimonial__image">
                  <img className="c-testimonial__image--hero" src={`${process.env.BACKEND_URL}${testimonial.previewImage}`} />
                  </div>
                  <div className="c-testimonial__main">
                    <h5 className="c-testimonial__main--body">{testimonial.body}</h5>
                    <h5 className="c-testimonial__main--date">{moment(testimonial.createdAt).format('MMMM Do YYYY')}</h5>
                    <hr className="o-line__testimonial" />
                    <h5 className="c-testimonial__main--title">{testimonial.title}</h5>
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

export default TestimonialPage