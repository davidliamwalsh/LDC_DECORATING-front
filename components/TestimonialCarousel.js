import { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import moment from 'moment'
import { Facebook } from 'react-content-loader'
import Slider from "react-slick"

class TestimonialCarousel extends Component {

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
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }]
    }

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
          return <Slider {...settings}>
            {data.testimonials.slice(0, testimonialSize).map((testimonial, index) => {
              return <div className="c-testimonialcarousel--container">
                <div className="c-testimonialcarousel__inner">
                  <div className="c-testimonialcarousel__data">
                    <div className="c-testimonialcarousel__data--text p-1">
                      <p>{testimonial.body}</p>
                    </div>
                    <div className="c-testimonialcarousel__data--info">
                      <div className="c-testimonialcarousel__data--info-name">
                        <li className="c-testimonialcarousel__data--info-name__title">{testimonial.title}</li>
                        <li className="c-testimonialcarousel__data--info-name__date">{moment(testimonial.createdAt).format('MMMM Do YYYY')}</li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            })}
          </Slider>
        }
      }}
    </Query>
  }
}

export default TestimonialCarousel