import { Component } from 'react'
import withData from '../lib/withData'
import TestimonialCard from '../components/TestimonialCard'

import Layout from '../components/Layout'

class Index extends Component {

  render () {
    return <Layout>
      <TestimonialCard testimonialSize={3} />
      <br />
      
    </Layout>
  }
}

export default withData(Index)