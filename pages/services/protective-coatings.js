import { Component } from 'react'
import withData from '../../lib/withData'
import Layout from '../../components/Layout'
import SideBar from '../../components/SideBar'
import Slider from "react-slick"

class ProtectiveCoating extends Component {
  render () {

    const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return <Layout>
      <div className="c-service-sector-table">
        <div className="c-service-sector-table__main">
          <div className="c-service-sector-table__main--primary">
            <h2 className="c-service-sector-table__main--primary-title">Protective &amp; Specialitst Coating</h2>
            <hr className="o-line" />
            <p className="c-service-sector-table__main--primary-text">At LDC Decorating Contractors we have experience with virtually all types of coatings that are applied either by traditional means or alternative methods such as by spray.</p>
            <p className="c-service-sector-table__main--primary-text">We have excellent trading history with all major paint manufacturers and have access to the technical expertise and specification services that they offer. In many cases we are able to offer warranties as to the performance and longevity of the coatings we apply.</p>
          </div>
          <div className="c-service-sector-table__main--sidebar">
            <SideBar />
          </div>
        </div>
      </div>

      <Slider {...settings}>
        <div>
          <div className="c-header__slider--image" />
        </div>
        <div>
          <div className="c-header__slider--image" />
        </div>
      </Slider>
    </Layout>
  }
}

export default withData(ProtectiveCoating)