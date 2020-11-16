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
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1
    }
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
          <h4 className="c-testimonialcarousel--title">Heading</h4>
          <Slider {...settings}>
            {data.testimonials.map((testimonial, index) => {
              return <div className="c-testimonialcarousel--container">
                <div className="c-testimonialcarousel__inner">
                  <div className="c-testimonialcarousel__data">
                    <div className="c-testimonialcarousel__data--text p-1">
                      <p>{testimonial.body}</p>
                    </div>
                    <div className="c-testimonialcarousel__data--info">
                      <div className="c-testimonialcarousel__data--info-hero mr-1">
                        <img src={`${process.env.BACKEND_URL}${testimonial.previewImage}`} />
                      </div>
                      <div className="c-testimonialcarousel__data--info-name ml-1">
                        <li>{testimonial.title}</li>
                        <li></li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            })}
          </Slider>
          </>
        }
      }}
    </Query>
  }
}

export default TestimonialCarousel