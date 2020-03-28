import { Component } from 'react'
import withData from '../lib/withData'
import Layout from '../components/Layout'
import KeyContactsGrid from '../components/KeyContactsGrid'
import OperationalStaff from '../components/OperationalStaff'
import Link from 'next/link'

class About extends Component {
  render () {
    return <Layout>
      <div className="o-head--intro">
        <h4 className="o-head--intro__title">Established in 1984, LDC Decorating Contractors has grown into a leading regional contractor directly employing a skilled workforce of over fifty time served tradesmen operating primarily across the North of England.</h4>
        <h5 className="o-head--intro__inset">TDespite our continued growth and expansion into new market sectors, our commitment to quality and customer service remains as strong as ever. LDC Decorating Contractors has built an enviable reputation as a firm that has the resources to competitively deal with contracts up to and in excess of one million pounds but at the same time, our customers can be confident that they are dealing with a family run business that genuinely cares about its reputation and takes pride in every job, big or small.
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
        
        <div className="c-about__section">
          <h2 className="c-about__section--title">Operational Staff</h2>
          <hr className="o-line" />
        </div>
        <OperationalStaff />

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