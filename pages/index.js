import { Component } from 'react'
import withData from '../lib/withData'
import Link from 'next/link'

import ClientServices from '../components/ClientServices'
import ProductServices from '../components/ProductServices'
import TestimonialCarousel from '../components/TestimonialCarousel'
import NewsArticleMain from '../components//NewsArticleMain'
import Accreditations from '../components/Accreditations'
import Layout from '../components/Layout'

class Index extends Component {

  render () {
    return <Layout>
      <div className="o-head--intro">
        <h4 className="o-head--intro__title" data-aos="fade">Based in West Yorkshire, LDC Decorating Contractors are a quality painting and decorating firm which provides a comprehensive range of services to domestic and commercial clients throughout the Nation. </h4>
        <h5 className="o-head--intro__inset" data-aos="fade">Our residential service is second to none as we give just as much commitment and attention to detail to our smaller jobs as our major projects and will guarantee that you will not find better for work quality or cost efficiency. We will do our utmost not to upset your usual routine whilst working in your home.</h5>
        <h5 className="o-head--intro__inset" data-aos="fade">Our commercial/industrial service is focused on giving you the most reliable quality driven service you can have. We will get your projects in on time and on your budget, many times our commercial customers require us to work around their business hours so we offer a 24/7 service, this saves the client the trouble of closing down to have the work carried out</h5>
      </div>
      
      <div className="o-section-head">
        <h4 className="o-section-head__title">
          Client Services
        </h4>
      </div>
      <div className="o-section-head__line">
        <hr />
      </div>
      <ClientServices />

      <ProductServices />

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
      <div className="c-testimonialcarousel mb-4">
        <TestimonialCarousel />
      </div>

      <NewsArticleMain newsArticleSize={3} />

      <div className="o-section-head">
        <h4 className="o-section-head__title">
          Accreditations
        </h4>
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