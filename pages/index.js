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
        <h4 className="o-head--intro__title" data-aos="fade">Leading commercial painting company, LDC Decorating Contractors Decorating Contractors undertake refurbishment projects across the North of England and beyond.</h4>
        <h5 className="o-head--intro__inset" data-aos="fade">LDC Decorating Contractors is a commercial painting and decorating contractor operating primarily in the North of England from our premises in Leeds, West Yorkshire. Established in 1984, our company now employs over fifty time-served painters and decorators working in all commercial and industrial sectors.</h5>
        <h5 className="o-head--intro__inset" data-aos="fade">As a family run business, we are committed to paying the closest attention to your needs and always providing a professional service at competitive prices. With 85% of our trade coming from repeat orders, LDC Decorating Contractors has built an envious reputation for the highest standards of workmanship backed by the resources and skills to tackle projects of any size.</h5>
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