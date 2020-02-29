import { Component } from 'react'
import withData from '../lib/withData'
import Layout from '../components/Layout'

class About extends Component {
  render () {
    return <Layout>
      <div className="c-head--intro">
        <h4 className="c-head--intro__title">Take a look at some of the feedback we have received from clients. In a customer service survey, 100% of respondents stated that they would recommend our service and use us again in the future.</h4>
        <h5 className="c-head--intro__inset">Take a look at some of the feedback we have received from clients. In a customer service survey, 100% of respondents stated that they would recommend our service and use us again in the future.</h5>
      </div>
    </Layout>
  }
}

export default withData(About)