import { Component } from 'react'
import withData from '../lib/withData'
import Layout from '../components/Layout'
import TestimonialPage from '../components/TestimonialPage'

class Testimonials extends Component {

  render () {
    return <Layout>
      <TestimonialPage testimonialSize={10} />
    </Layout>
  }
}

export default withData(Testimonials)