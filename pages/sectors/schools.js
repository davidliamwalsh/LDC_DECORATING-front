import { Component } from 'react'
import withData from '../../lib/withData'
import Layout from '../../components/Layout'
import SideBar from '../../components/SideBar'

class SectorsSchools extends Component {
  render () {

    return <Layout>
      <div className="c-container">
        <div className="c-service-sector-table">
          <div className="c-service-sector-table__main">
            <div className="c-service-sector-table__main--primary">
              <h2 className="c-service-sector-table__main--primary-title">School Refurbishment Services</h2>
              <hr className="o-line" />
              <p className="c-service-sector-table__main--primary-text">LDC Decorating Contractors are experienced in working in school and university buildings both during school holidays and during term time. Our operatives are DBS checked and are experienced in working in this type of environment.</p>
              <p className="c-service-sector-table__main--primary-text">The team at LDC Decorating Contractors are here to ensure that in doing our job, we don’t interfere with yours. We understand that having contractors disrupting your school is not an option which is why we always aim to work around you creating the minimum fuss possible without compromising on quality.</p>
              <p className="c-service-sector-table__main--primary-text">We have built an envious reputation with many local schools and we are the go to contractor for many Headteachers who know that they can rely on us to offer competitive prices and an exceptional level of service time and time again.</p>
              <p className="c-service-sector-table__main--primary-text">We are able to offer a comprehensive range of painting and decorating services to suit virtually all requirements. Take a look at the list of services that we offer for more details.</p>
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

export default withData(SectorsSchools)