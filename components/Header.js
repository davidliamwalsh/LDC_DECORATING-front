import { Component } from 'react'
import { withRouter } from 'next/router'
import Navbar from './Navbar'
import Slider from "react-slick"
import Banner from './Banner'

class Header extends Component {
  render () {

    const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    if (this.props.router.pathname === '/') {
      return ( 
        <div className="c-header">
          <Navbar />
          <Slider {...settings}>
            <div>
              <div className="c-header__slider--image">
              <div className="c-header__slider--image-container" data-aos="zoom-in">
                <div className="c-header__slider--image-title c-header__slider--image-item">
                  <h2 className="c-header__slider--image-item__text">Commercial Refurbishment</h2>
                </div>
                <div className="c-header__slider--image-main c-header__slider--image-item">
                  <h4 className="c-header__slider--image-item__text">Specialists</h4>
                </div>
              </div>
              </div>
            </div>
            <div>
              <div className="c-header__slider--image">
                <div className="c-header__slider--image-container" data-aos="zoom-in">
                  <div className="c-header__slider--image-title c-header__slider--image-item">
                    <h2 className="c-header__slider--image-item__text">Commercial Refurbishment</h2>
                  </div>
                  <div className="c-header__slider--image-main c-header__slider--image-item">
                    <h4 className="c-header__slider--image-item__text">Specialists</h4>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      )
    } else {
      return ( <>
        <Navbar />
        <Banner />
      </>
      )
    }
  }
}

export default withRouter(Header)