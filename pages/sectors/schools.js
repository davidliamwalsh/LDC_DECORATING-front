import { Component } from 'react'
import withData from '../../lib/withData'
import Layout from '../../components/Layout'
import SideBar from '../../components/SideBar'
import Slider from "react-slick"

class SectorsSchools extends Component {
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
            <h2 className="c-service-sector-table__main--primary-title">School Refurbishment Services</h2>
            <hr className="o-line" />
            <p className="c-service-sector-table__main--primary-text">Greens are experienced in working in school and university buildings both during school holidays and during term time. Our operatives are DBS checked and are experienced in working in this type of environment.</p>
            <p className="c-service-sector-table__main--primary-text">The team at Greens are here to ensure that in doing our job, we don’t interfere with yours. We understand that having contractors disrupting your school is not an option which is why we always aim to work around you creating the minimum fuss possible without compromising on quality.</p>
            <p className="c-service-sector-table__main--primary-text">We have built an envious reputation with many local schools and we are the go to contractor for many Headteachers who know that they can rely on us to offer competitive prices and an exceptional level of service time and time again.</p>
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

export default withData(SectorsSchools)