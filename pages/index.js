import { Component } from 'react'
import withData from '../lib/withData'
import OurService from '../components/OurService'
import TestimonialPage from '../components/TestimonialPage'
import Accreditations from '../components/Accreditations'
import Layout from '../components/Layout'
import Link from 'next/link'

class Index extends Component {

  render () {
    return <Layout>
      <div className="o-head--intro">
        <h4 className="o-head--intro__title">Take a look at some of the feedback we have received from clients. In a customer service survey, 100% of respondents stated that they would recommend our service and use us again in the future.</h4>
        <h5 className="o-head--intro__inset">Take a look at some of the feedback we have received from clients. In a customer service survey, 100% of respondents stated that they would recommend our service and use us again in the future.</h5>
      </div>
      
      <OurService />

      <div className="o-section">
        <h4 className="o-section__title">
          Testimonials
        </h4>
        <Link href='/testimonials'>
          <a className="o-btn">View all</a>
        </Link>
      </div>
      <div className="o-section__line">
        <hr />
      </div>
      <TestimonialPage testimonialSize={3} />

      <div className="o-section">
        <h4 className="o-section__title">
          Accreditations
        </h4>
        <Link href='/accreditations'>
          <a className="o-btn">View all</a>
        </Link>
      </div>
      <div className="o-section__line">
        <hr />
      </div>
      <Accreditations />
    </Layout>
  }
}

export default withData(Index)