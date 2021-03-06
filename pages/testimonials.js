import { Component } from 'react'
import withData from '../lib/withData'
import Layout from '../components/Layout'
import TestimonialPage from '../components/TestimonialPage'

class Testimonials extends Component {

  render () {
    return <Layout>
      <div className="o-head--intro">
        <h4 className="o-head--intro__title">Take a look at some of the feedback we have received from clients. In a customer service survey, 100% of respondents stated that they would recommend our service and use us again in the future.</h4>
      </div>
      
      <div className="c-container">
        <TestimonialPage testimonialSize={10} />
      </div>
      
    </Layout>
  }
}

export default withData(Testimonials)