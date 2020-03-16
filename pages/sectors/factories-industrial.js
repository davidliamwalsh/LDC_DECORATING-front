import { Component } from 'react'
import withData from '../../lib/withData'
import Layout from '../../components/Layout'
import SideBar from '../../components/SideBar'
import Slider from "react-slick"

class SectorsFactoriesIndustrial extends Component {
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
              <h2 className="c-service-sector-table__main--primary-title">Industrial Painting &amp; Refurbishments</h2>
              <hr className="o-line" />
              <p className="c-service-sector-table__main--primary-text">LDC Decorating Contractors are experienced in working in factories and industrial settings where not disrupting workflow may be imperative. We are able to work out of hours when required or to tight deadlines such as annual shut down periods.</p>
              <p className="c-service-sector-table__main--primary-text">We regularly apply specialist coatings to internal surfaces such as machine enamel and hard wearing epoxy wall and floor paints. We are often required to carry out essential maintenance painting such as bay and line markings to factory floors which may experience high traffic and wear.</p>
              <p className="c-service-sector-table__main--primary-text">LDC Decorating Contractors offer a comprehensive range of painting and decorating services to suit virtually all requirements including cladding and building painting where durability and guarantees are required. Take a look at the list of services that we offer for more details.</p>
              <p className="c-service-sector-table__main--primary-text">Our team are fully accredited in all access methods and are capable of working in the most challenging heavy industrial environments.</p>
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

export default withData(SectorsFactoriesIndustrial)