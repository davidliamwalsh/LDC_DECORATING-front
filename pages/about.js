import { Component } from 'react'
import withData from '../lib/withData'
import Layout from '../components/Layout'
import AboutOfficeGrid from '../components/AboutOfficeGrid'
import AboutPainterDecoratorsGrid from '../components/AboutPainterDecoratorsGrid'
import Link from 'next/link'

class About extends Component {
  render () {
    return <Layout>
      <div className="o-head--intro">
        <h4 className="o-head--intro__title">The company was founded 15 years ago and has grown from strength to strength, our philosophy is to provide the customer with a professional experience from start to finish. and we pride ourselves on being friendly, reliable, tidy, responsible priced, and high finish of work.</h4>
        <h5 className="o-head--intro__inset">We are fully insured to 2 million, and can also provide a full risk assessment and method statement for the bigger jobs. We have a large team of fully vetted and experienced decorators on board that will go the extra mile. We can provide advice and ideas to make sure that the job doesn't just look good - it also lasts.
        </h5>
      </div>
      <div className="o-section-head">
        <h4 className="o-section-head__title">
          Meet the Team
        </h4>
      </div>
      <div className="o-section-head__line">
        <hr />
      </div>
      
      <div className="c-container">
        <div className="c-about__section">
          <h2 className="c-about__section--title">Office Staff</h2>
          <hr className="o-line" />
        </div>
        <AboutOfficeGrid userSize={10} />

        <div className="c-about__section">
          <h2 className="c-about__section--title">Key Painting &amp; Decorators</h2>
          <hr className="o-line" />
        </div>
        <AboutPainterDecoratorsGrid decoratorSize={10} />

        <div className="c-about-links">
          <Link href='/careers'>
            <div className="c-about-links__box">
              <a className="c-about-links__box--link">Careers</a>
            </div>
          </Link>
          <Link href='/sectors'>
            <div className="c-about-links__box">
              <a className="c-about-links__box--link">Sectors</a>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  }
}

export default withData(About)