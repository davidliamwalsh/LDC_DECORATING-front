import { Component } from 'react'
import withData from '../../lib/withData'
import Layout from '../../components/Layout'
import SideBar from '../../components/SideBar'
import Slider from "react-slick"

class CladdingRestoration extends Component {
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
              <h2 className="c-service-sector-table__main--primary-title">Cladding Restoration</h2>
              <hr className="o-line" />
              <p className="c-service-sector-table__main--primary-text">LDC Decorating Contractors are specialists in restoring tired cladding to bring your building back to life where pre-finished cladding has failed prematurely or where a customer requires their building to be rebranded.</p>
              <p className="c-service-sector-table__main--primary-text">Using either tower scaffolding or powered access machinery to access the effected areas, we first ensure that all of the failed paint is removed from the substrate. Although time consuming and labour intensive, this stage is essential to ensure that new coatings adhere property and mean that your cladding stands the test of time rather than looking good for a short time before starting to fail again.</p>
              <p className="c-service-sector-table__main--primary-text">Any bare galvanised steel is primed before a specialist cladding paint is applied. We are able to offer manufacturer backed warranties as to the performance of any coating we apply. The finished cladding can often transform a tired looking building with a huge cost saving over replacing the defective panels.</p>
              <p className="c-service-sector-table__main--primary-text">We are also experienced in colour changes of all cladding types including plastic coated systems where specialist primers are required.</p>
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

export default withData(CladdingRestoration)