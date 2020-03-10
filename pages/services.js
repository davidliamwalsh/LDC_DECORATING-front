import { Component } from 'react'
import withData from '../lib/withData'
import Layout from '../components/Layout'
import ServicesGrid from '../components/ServicesGrid'
import ServicesBrands from '../components/ServicesBrands'

class Services extends Component {
  render () {
    return <Layout>
      <div className="o-head--intro">
        <h4 className="o-head--intro__title">Take a look at some of the feedback we have received from clients. In a customer service survey, 100% of respondents stated that they would recommend our service and use us again in the future.</h4>
        <h5 className="o-head--intro__inset">Take a look at some of the feedback we have received from clients. In a customer service survey, 100% of respondents stated that they would recommend our service and use us again in the future.</h5>
      </div>
      <ServicesGrid />
      <div className="o-section">
        <h4 className="o-section__title">Brands & Products</h4>
      </div>
      <div className="o-section__line">
        <hr />
      </div>
      <ServicesBrands />
    </Layout>
  }
}

export default withData(Services)