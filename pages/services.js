import { Component } from 'react'
import withData from '../lib/withData'
import Layout from '../components/Layout'
import ServicesGrid from '../components/ServicesGrid'
import ServicesBrands from '../components/ServicesBrands'

class Services extends Component {
  render () {
    return <Layout>
      <div className="o-head--intro">
        <h4 className="o-head--intro__title">At LDC Decorating Contractors we have over three decades of experience applying all types of decorative and protective coatings in virtually all sectors and are able to offer our assistance in choosing the right products for the job.</h4>
        <h5 className="o-head--intro__inset">Whether you require a simple and cost effective office redecoration or require specialist assistance in specifying fire retardant or other specialist coatings, you can rest assured that the team at LDC Decorating Contractors have the experience and skills to ensure that you project is completed on time, on budget and with minimal disruption. ‘In doing our job, our aim is always to not interfere with you doing yours’</h5>
      </div>

      <div className="c-container">
        <ServicesGrid />
      </div>
      
      <div className="o-section-head">
        <h4 className="o-section-head__title">Brands & Products</h4>
      </div>
      <div className="o-section-head__line">
        <hr />
      </div>

      <div className="c-container">
        <ServicesBrands />
      </div>
      
    </Layout>
  }
}

export default withData(Services)