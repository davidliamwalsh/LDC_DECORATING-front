import { Component } from 'react'
import withData from '../../lib/withData'
import Layout from '../../components/Layout'
import SideBar from '../../components/SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class ProtectiveCoating extends Component {
  render () {

    return <Layout>
      <div className="c-container">
        <div className="c-service-sector-table">
          <div className="c-service-sector-table__main">
            <div className="c-service-sector-table__main--primary">
              <h2 className="c-service-sector-table__main--primary-title">Protective &amp; Specialitst Coating</h2>
              <hr className="o-line" />
              <p className="c-service-sector-table__main--primary-text">At LDC Decorating Contractors we have experience with virtually all types of coatings that are applied either by traditional means or alternative methods such as by spray.</p>
              <p className="c-service-sector-table__main--primary-text">We have excellent trading history with all major paint manufacturers and have access to the technical expertise and specification services that they offer. In many cases we are able to offer warranties as to the performance and longevity of the coatings we apply.</p>
              <div className="c-service-sector-table__main--primary-list">
                <li className="c-service-sector-table__main--primary-list_item">
                  <span><FontAwesomeIcon icon={faCheck} /></span>
                  <p>Flame defence and fire retardant coatings</p>
                </li>
                <li className="c-service-sector-table__main--primary-list_item">
                  <span><FontAwesomeIcon icon={faCheck} /></span>
                  <p>Hygienic coatings in hospitals and food preparation areas</p>
                </li>
                <li className="c-service-sector-table__main--primary-list_item">
                  <span><FontAwesomeIcon icon={faCheck} /></span>
                  <p>Anti-mould coatings in areas prone to condensation</p>
                </li>
                <li className="c-service-sector-table__main--primary-list_item">
                  <span><FontAwesomeIcon icon={faCheck} /></span>
                  <p>Epoxy resin coatings for floors and other applications</p>
                </li>
                <li className="c-service-sector-table__main--primary-list_item">
                  <span><FontAwesomeIcon icon={faCheck} /></span>
                  <p>Painted techniques such as graining and marbling</p>
                </li>
                <li className="c-service-sector-table__main--primary-list_item">
                  <span><FontAwesomeIcon icon={faCheck} /></span>
                  <p>Anti-graffiti and anti-climb vandalism deterrents</p>
                </li>
              </div>
            </div>
            <div className="c-service-sector-table__main--sidebar">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  }
}

export default withData(ProtectiveCoating)