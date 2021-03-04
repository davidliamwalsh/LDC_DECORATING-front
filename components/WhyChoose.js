import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faClock, faGraduationCap, faHome } from '@fortawesome/free-solid-svg-icons'

class WhyChoose extends Component {
  render () {

    const headReset = {
      textAlign: "center",
      display: "block"
    }

    return (
      <div className="c-product-services">
        <div className="c-container">
          <div className="o-section-head no-padding" style={headReset}>
            <h4 className="o-section-head__title" style={{color: "white"}}>
              Why <span style={{color: "#D18C00"}}>Choose</span> Us
            </h4>
          </div>
          <div className="c-product-services__sub">
            <h6 className="c-product-services__sub--text">By guiding you through every step of any project with the integrity and experience LDC Decorating Ltd have been renowned for.</h6>
          </div>
          <div className="c-product-services__main">
            <div className="c-product-services__main--item" data-aos="fade">
              <div className="c-product-services__main--item-image">
                <span><FontAwesomeIcon icon={faHome} /></span>
              </div>
              <div className="c-product-services__main--item-main">
                <h6 className="c-product-services__main--item-main__title">Housing Design &amp; Build</h6>
                <p className="c-product-services__main--item-main__description">Successful in operating to partnering, traditional and negotiated single or multi-phased contracts. Call or email us for more information.</p>
              </div>
            </div>
            <div className="c-product-services__main--item" data-aos="fade">
              <div className="c-product-services__main--item-image">
                <span><FontAwesomeIcon icon={faGraduationCap} /></span>
              </div>
              <div className="c-product-services__main--item-main">
                <h6 className="c-product-services__main--item-main__title">Experience and Expertise</h6>
                <p className="c-product-services__main--item-main__description">Over 25 years LDC Decorating Ltd successfully continue to deliver.</p>
              </div>
            </div>
            <div className="c-product-services__main--item" data-aos="fade">
              <div className="c-product-services__main--item-image">
                <span><FontAwesomeIcon icon={faBuilding} /></span>
              </div>
              <div className="c-product-services__main--item-main">
                <h6 className="c-product-services__main--item-main__title">Commercial, Listed and Historic Buildings</h6>
                <p className="c-product-services__main--item-main__description">Providing specialists with the ability restore bygone buildings to their former glory to meeting the standards of modern day Commercial developments.</p>
              </div>
            </div>
            <div className="c-product-services__main--item" data-aos="fade">
              <div className="c-product-services__main--item-image">
                <span><FontAwesomeIcon icon={faClock} /></span>
              </div>
              <div className="c-product-services__main--item-main">
                <h6 className="c-product-services__main--item-main__title">Quality and Delivery to Time</h6>
                <p className="c-product-services__main--item-main__description">Working 100s of sites across Yorkshire we are very proud of our abilities and experience to develop within time and budget.</p>
              </div>
            </div>
          </div>
        </div>
      </div> 
    )
  }
}

export default WhyChoose