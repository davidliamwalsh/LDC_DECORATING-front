import { Component } from 'react'
import withData from '../lib/withData'
import OurService from '../components/OurService'
import TestimonialPage from '../components/TestimonialPage'
import NewsArticleMain from '../components//NewsArticleMain'
import Accreditations from '../components/Accreditations'
import Layout from '../components/Layout'
import Link from 'next/link'

class Index extends Component {

  render () {
    return <Layout>
      <div className="o-head--intro">
        <h4 className="o-head--intro__title" data-aos="fade">Take a look at some of the feedback we have received from clients. In a customer service survey, 100% of respondents stated that they would recommend our service and use us again in the future.</h4>
        <h5 className="o-head--intro__inset" data-aos="fade">Take a look at some of the feedback we have received from clients. In a customer service survey, 100% of respondents stated that they would recommend our service and use us again in the future.</h5>
      </div>
      
      <OurService />

      <div className="o-section-head">
        <h4 className="o-section-head__title">
          Testimonials
        </h4>
        <Link href='/testimonials'>
          <a className="o-btn">View all</a>
        </Link>
      </div>
      <div className="o-section-head__line">
        <hr />
      </div>
      <div className="c-container">
        <TestimonialPage testimonialSize={3} />
      </div>

      <NewsArticleMain newsArticleSize={3} />

      <div className="o-section-head">
        <h4 className="o-section-head__title">
          Accreditations
        </h4>
        <Link href='/accreditations'>
          <a className="o-btn">View all</a>
        </Link>
      </div>
      <div className="o-section-head__line">
        <hr />
      </div>
      <div className="c-container">
        <Accreditations />
      </div>
      
    </Layout>
  }
}

export default withData(Index)