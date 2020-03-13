import { Component } from 'react'
import withData from '../../lib/withData'
import Layout from '../../components/Layout'
import SideBar from '../../components/SideBar'
import Slider from "react-slick"

class InternalExternalPaintSpray extends Component {
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
            <h2 className="c-service-sector-table__main--primary-title">Internal &amp; External Paint Spraying</h2>
            <hr className="o-line" />
            <p className="c-service-sector-table__main--primary-text">LDC Decorating Contractors have a highly skilled team of sprayers who are experienced in the use of spraying equipment both internally and externally. We have the experience to make sure that you are aware of the pros and cons of spray application before any work is undertaken.</p>
            <p className="c-service-sector-table__main--primary-text">As well as traditional airless spraying, often used in factories and vacant buildings to cover large areas quickly, LDC Decorating Contractors also are experienced in low pressure HVLP spraying which is ideally suited to intricate work where an exceptional finish is required.</p>
            <p className="c-service-sector-table__main--primary-text">HVLP spraying is ideal for painting factory-finished metals where previous coatings have failed or a colour change is required. We have successfully used this technique to achieve an almost factory perfect finish in the following applications:</p>
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

export default withData(InternalExternalPaintSpray)