import { Component } from 'react'
import withData from '../lib/withData'
import Layout from '../components/Layout'
import CareersMain from '../components/CareersMain'

class Careers extends Component {
  render () {
    return <Layout>  
      <CareersMain />
    </Layout>
  }
}

export default withData(Careers)