import { Component } from 'react'
import Layout from '../components/Layout'
import withData from '../lib/withData'
import SectorsGrid from '../components/SectorsGrid'

class Sectors extends Component {
  render () {
    return <Layout>
      <div className="o-head--intro">
        <h4 className="o-head--intro__title">Take a look at some of the feedback we have received from clients. In a customer service survey, 100% of respondents stated that they would recommend our service and use us again in the future.</h4>
        <h5 className="o-head--intro__inset">Take a look at some of the feedback we have received from clients. In a customer service survey, 100% of respondents stated that they would recommend our service and use us again in the future.</h5>
      </div>
      <SectorsGrid />
    </Layout>
  }
}

export default withData(Sectors)