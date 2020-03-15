import { Component } from 'react'
import withData from '../../lib/withData'
import Layout from '../../components/Layout'
import SideBar from '../../components/SideBar'
import Slider from "react-slick"

class SectorsOffice extends Component {
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
              <h2 className="c-service-sector-table__main--primary-title">Office Painting &amp; Decorating Services</h2>
              <hr className="o-line" />
              <p className="c-service-sector-table__main--primary-text">When the time comes to give your office space a new lease of life, the team at Greens are here to ensure that in doing our job, we don’t interfere with yours. We understand that having contractors disrupting your business is not an option which is why we always aim to work around you creating the minimum fuss possible without compromising on quality.</p>
              <p className="c-service-sector-table__main--primary-text">All our operatives are well presented, courteous and professional and is the reason why we are trusted by our clients to work in sensitive areas such as banks and schools. We are able to work evenings, nights and weekends and have the resources to ensure that we are able to exceed your expectations.</p>
              <p className="c-service-sector-table__main--primary-text">We are able to offer a comprehensive range of painting and decorating services to suit virtually all requirements. Take a look at the list of services that we offer for more details.</p>
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

export default withData(SectorsOffice)