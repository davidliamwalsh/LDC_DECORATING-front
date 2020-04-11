import { Component } from 'react'
import withData from '../../lib/withData'
import Layout from '../../components/Layout'
import SideBar from '../../components/SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class DecorativeCoating extends Component {
  render () {

    return <Layout>
      <div className="c-container">
        <div className="c-service-sector-table">
          <div className="c-service-sector-table__main">
            <div className="c-service-sector-table__main--primary">
              <h2 className="c-service-sector-table__main--primary-title">Decorative Coatings</h2>
              <hr className="o-line" />
              <p className="c-service-sector-table__main--primary-text">When it comes to decorative works, the skills and experience of the operative are primary in ensuring success. Unlike many contractors with a ‘have a go’ attitude, LDC Decorating Contractors have a team with unrivalled experience in wide vinyl and mural hanging as well as painted effects.</p>
              <p className="c-service-sector-table__main--primary-text">LDC Decorating Contractors have a team of ten specialist fabric applicators who each have over 20 years experience working in banks, exclusive hotels and retail environments where they have perfected their application techniques.</p>
              <p className="c-service-sector-table__main--primary-text">Some of the specialist decorative coatings that we apply:</p>
              <div className="c-service-sector-table__main--primary-list">
                <li className="c-service-sector-table__main--primary-list_item">
                  <span><FontAwesomeIcon icon={faCheck} /></span>
                  <p>Wide-vinyl and fabric wall coverings</p>
                </li>
                <li className="c-service-sector-table__main--primary-list_item">
                  <span><FontAwesomeIcon icon={faCheck} /></span>
                  <p>Murals and printed graphics</p>
                </li>
                <li className="c-service-sector-table__main--primary-list_item">
                  <span><FontAwesomeIcon icon={faCheck} /></span>
                  <p>Stencilling and freehand wall art</p>
                </li>
                <li className="c-service-sector-table__main--primary-list_item">
                  <span><FontAwesomeIcon icon={faCheck} /></span>
                  <p>Dry wipe and projector paint</p>
                </li>
                <li className="c-service-sector-table__main--primary-list_item">
                  <span><FontAwesomeIcon icon={faCheck} /></span>
                  <p>Painted techniques such as graining and marbling</p>
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

export default withData(DecorativeCoating)