import { Component } from 'react'
import withData from '../lib/withData'
import Layout from '../components/Layout'
import KeyContactsGrid from '../components/KeyContactsGrid'
import Link from 'next/link'

class About extends Component {
  render () {
    return <Layout>
      <div className="o-head--intro">
        <h4 className="o-head--intro__title">Established in 1984, LDC Decorating Contractors has grown into a leading regional contractor directly employing a skilled workforce of over fifty time served tradesmen operating primarily across the North of England.</h4>
        <h5 className="o-head--intro__inset">The team at LDC Decorating are fully qualified in all aspects of the decorating trade and we offer all of our clients a first class service, no matter how small or large the job. We can provide advice and ideas to make sure that the job doesn't just look good - it also lasts. We pride ourselves on our reputation for quality and reliability.
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
          <h2 className="c-about__section--title">Key Contacts</h2>
          <hr className="o-line" />
        </div>
        <KeyContactsGrid userSize={10} />

        <div className="c-about-links">
          <Link href='/careers'>
            <div className="c-about-links__box">
              <a className="c-about-links__box--link">Careers</a>
            </div>
          </Link>
          <Link href='/news'>
            <div className="c-about-links__box">
              <a className="c-about-links__box--link">News</a>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  }
}

export default withData(About)