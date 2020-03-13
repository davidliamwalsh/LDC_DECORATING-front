import { Component } from 'react'
import withData from '../../lib/withData'
import Layout from '../../components/Layout'
import SideBar from '../../components/SideBar'
import Slider from "react-slick"

class DecorativeCoating extends Component {
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
            <h2 className="c-service-sector-table__main--primary-title">Decorative Coatings</h2>
            <hr className="o-line" />
            <p className="c-service-sector-table__main--primary-text">When it comes to decorative works, the skills and experience of the operative are primary in ensuring success. Unlike many contractors with a ‘have a go’ attitude, LDC Decorating Contractors have a team with unrivalled experience in wide vinyl and mural hanging as well as painted effects.</p>
            <p className="c-service-sector-table__main--primary-text">LDC Decorating Contractors have a team of ten specialist fabric applicators who each have over 20 years experience working in banks, exclusive hotels and retail environments where they have perfected their application techniques.</p>
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

export default withData(DecorativeCoating)