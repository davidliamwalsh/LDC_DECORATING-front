import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintRoller, faBuilding, faFillDrip, faUsers } from '@fortawesome/free-solid-svg-icons'

class ClientServices extends Component {
  render () {
    return <>
      <div className="c-container">
        <div className="c-client-services">
          <div className="c-client-services__item">
            <div className="c-client-services__item--hero" data-aos="fade">
              <span><FontAwesomeIcon icon={faPaintRoller} /></span>
            </div>
            <div className="c-client-services__item--title">
              <h2 className="c-client-services__item--title-text">
                Painting and Decorating
              </h2>
            </div>
            <div className="c-client-services__item--main">
              <p className="c-client-services__item--main-text">
                Clean, professional and reliable painting &amp; decorating service in Leeds and surrounding areas.
              </p>
            </div>
          </div>

          <div className="c-client-services__item">
            <div className="c-client-services__item--hero" data-aos="fade" data-aos-delay="200">
              <span><FontAwesomeIcon icon={faBuilding} /></span>
            </div>
            <div className="c-client-services__item--title">
              <h2 className="c-client-services__item--title-text">
                Residential &amp; Commercial
              </h2>
            </div>
            <div className="c-client-services__item--main">
              <p className="c-client-services__item--main-text">
                We specialise in painting your home, apartment, office &amp; business. No job too big or small for LDC Painting &amp; Decorators.
              </p>
            </div>
          </div>

          <div className="c-client-services__item">
            <div className="c-client-services__item--hero" data-aos="fade" data-aos-delay="400">
              <span><FontAwesomeIcon icon={faUsers} /></span>
            </div>
            <div className="c-client-services__item--title">
              <h2 className="c-client-services__item--title-text">
                Friendly Service
              </h2>
            </div>
            <div className="c-client-services__item--main">
              <p className="c-client-services__item--main-text">
                Flexible Service, We work to suit our customers requirements and to minimise any disruption to your schedule.
              </p>
            </div>
          </div>

          <div className="c-client-services__item">
            <div className="c-client-services__item--hero" data-aos="fade" data-aos-delay="600">
              <span><FontAwesomeIcon icon={faFillDrip} /></span>
            </div>
            <div className="c-client-services__item--title">
              <h2 className="c-client-services__item--title-text">
                Quality Products
              </h2>
            </div>
            <div className="c-client-services__item--main">
              <p className="c-client-services__item--main-text">
                We only use the finest of paints and materials and guarantee high levels of workmanship with competitive prices
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  }
}

export default ClientServices