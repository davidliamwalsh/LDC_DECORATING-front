import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

class OurService extends Component {
  render () {
    return (
      <div className="c-our-service">
        <div className="c-container">
          <div className="o-section-head">
            <h4 className="o-section-head__title">
              Our Services
            </h4>
          </div>
          <div className="o-section-head__line">
            <hr />
          </div>
          <div className="c-our-service__main">
            <div className="c-our-service__main--item" data-aos="fade">
              <div className="c-our-service__main--item-image">
                <span><FontAwesomeIcon icon={faCheckCircle} /></span>
              </div>
              <div className="c-our-service__main--item-main">
                <h4 className="c-our-service__main--item-main__title">title</h4>
                <p className="c-our-service__main--item-main__description">Our flexible approach means we adapt to your requirements, whether that’s working out of hours or on weekend, whatever it takes to get the job done. We firmly believe that in doing our job, our aim is not interfere with you doing yours.</p>
              </div>
            </div>
            <div className="c-our-service__main--item" data-aos="fade" data-aos-delay="200">
              <div className="c-our-service__main--item-image">
                <span><FontAwesomeIcon icon={faCheckCircle} /></span>
              </div>
              <div className="c-our-service__main--item-main">
                <h4 className="c-our-service__main--item-main__title">title</h4>
                <p className="c-our-service__main--item-main__description">Full range of commercial painting services for both internal and external projects. From the use of specialist and protective paints, to cladding restoration, wide vinyl hanging, render and plastering.</p>
              </div>
            </div>
            <div className="c-our-service__main--item" data-aos="fade" data-aos-delay="400">
              <div className="c-our-service__main--item-image">
                <span><FontAwesomeIcon icon={faCheckCircle} /></span>
              </div>
              <div className="c-our-service__main--item-main">
                <h4 className="c-our-service__main--item-main__title">title</h4>
                <p className="c-our-service__main--item-main__description">LDC Decorating Contractors is the decorating contractor of choice for many large organisations, councils and main contractors with over 30 years proven history for exemplary levels of workmanship and service.</p>
              </div>
            </div>
          </div>
        </div>
      </div> 
    )
  }
}

export default OurService