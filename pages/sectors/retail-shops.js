import { Component } from 'react'
import withData from '../../lib/withData'
import Layout from '../../components/Layout'
import SideBar from '../../components/SideBar'
import Slider from "react-slick"

class SectorsRetailShop extends Component {
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
            <h2 className="c-service-sector-table__main--primary-title">Retail Interior Refurbishments &amp; Fit Outs</h2>
            <hr className="o-line" />
            <p className="c-service-sector-table__main--primary-text">Greens have experienced operatives working in the retail and shop fitting sectors where we regularly offer our full range of painting and decorating services to our customers.</p>
            <p className="c-service-sector-table__main--primary-text">We have long standing commercial relationships with retailers, banks and building societies who trust us to offer exceptional service and attention to detail whilst maintaining competitive prices.</p>
            <p className="c-service-sector-table__main--primary-text">Our operatives are able to travel nationally for existing customers to ensure a standard of service across a client’s sites. We often work out of hours and are trusted by many clients to work in sensitive areas such as banks.</p>
            <p className="c-service-sector-table__main--primary-text">We are able to offer a comprehensive range of painting and decorating services to suit virtually all requirements. Take a look at the list of services that we offer for more details.</p>
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

export default withData(SectorsRetailShop)