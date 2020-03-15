import { Component } from 'react'
import withData from '../../lib/withData'
import Layout from '../../components/Layout'
import SideBar from '../../components/SideBar'
import Slider from "react-slick"

class ServicesPainting extends Component {
  render () {

    const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return <Layout>
      <div className="c-container">
        <div className="c-service-sector-table">
          <div className="c-service-sector-table__main">
            <div className="c-service-sector-table__main--primary">
              <h2 className="c-service-sector-table__main--primary-title">Painting</h2>
              <hr className="o-line" />
              <p className="c-service-sector-table__main--primary-text">Whether your office requires a lick of magnolia, or your listed building requires specialist restoration, at LDC Decorating Contractors, we have the skills and experience to offer the right service at the right price. We regularly carry out painting contracts of all sizes and in all commercial sectors.</p>
              <p className="c-service-sector-table__main--primary-text">LDC Decorating Contractors work closely with the specification departments of the largest paint manufacturers to offer our customers access to their technical and colour specification services. Whether you require advice on colours to meet disability requirements or you just need to achieve the ‘wow factor,’ we are here to help with all of your technical requirements.</p>
              <p className="c-service-sector-table__main--primary-text">We are fully accredited and hold all of the necessary insurances and qualifications to ensure that you meet all of your legal obligations when allowing a contractor into your workspace. You can rest assured that we have the manpower and the experience to meet the tightest of deadlines and successfully complete the most challenging of projects.</p>
            </div>
            <div className="c-service-sector-table__main--sidebar">
              <SideBar />
            </div>
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

export default withData(ServicesPainting)