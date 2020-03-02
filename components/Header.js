import { Component } from 'react'
import { withRouter } from 'next/router'
import Navbar from './Navbar'
import Slider from "react-slick";

class Header extends Component {
  render () {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    if (this.props.router.pathname === '/') {
      return ( 
        <div className="c-header">
          <Navbar />
          <Slider {...settings}>
            <div>
              <div className="c-header__slider--image" />
              <div className="c-header__slider--image-text">
                
              </div>
            </div>
            <div>
              <div className="c-header__slider--image" />
            </div>
          </Slider>
        </div>
      )
    } else {
      return (
        <Navbar />
      )
    }
  }
}

export default withRouter(Header)