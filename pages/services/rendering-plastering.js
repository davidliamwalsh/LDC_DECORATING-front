import { Component } from 'react'
import withData from '../../lib/withData'
import Layout from '../../components/Layout'
import SideBar from '../../components/SideBar'

class RenderingPlastering extends Component {
  render () {

    return <Layout>
      <div className="c-container">
        <div className="c-service-sector-table">
          <div className="c-service-sector-table__main">
            <div className="c-service-sector-table__main--primary">
              <h2 className="c-service-sector-table__main--primary-title">Rendering, Plastering &amp; Prior to Paint Repairs</h2>
              <hr className="o-line" />
              <p className="c-service-sector-table__main--primary-text">At LDC Decorating Contractors we have the in-house skills to repair and renew wall systems prior to painting. Our directly employed team of plasterers are able to patch or skim plastered walls and ceilings that require more extensive repairs than would usually be undertaken by a decorating contractor.</p>
              <p className="c-service-sector-table__main--primary-text">We are also able to undertake taping and jointing of plasterboard on new build projects where a skim finish is not required. LDC Decorating Contractors are also pleased to announce that we now have operatives approved under the Johnstones Stormshield applicator scheme.</p>
              <p className="c-service-sector-table__main--primary-text">This allows us access to Johnstones’ range of render and external wall insulation products used to improve the thermal efficiency of a building before applying a tough, modern and durable rendered finish available in a range of colours.</p>
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

export default withData(RenderingPlastering)