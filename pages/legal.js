import { Component } from 'react'
import withData from '../lib/withData'
import Layout from '../components/Layout'
import PrivacyPolicy from '../components/PrivacyPolicy'
import Cookies from '../components/Cookies'
import TermsConditions from '../components/TermConditions'
import FAQ from '../components/FAQ'

class Legal extends Component {
  render () {
    return <Layout>  
      <div className="o-section-head">
        <h4 className="o-section-head__title">
          FAQ &amp; Legal Information
        </h4>
      </div>
      <div className="o-section-head__line">
        <hr />
      </div>

      <div className="c-container">
        <PrivacyPolicy />
      </div>
      <div className="c-container">
        <Cookies />
      </div>
      <div className="c-container">
        <TermsConditions />
      </div>
      <div className="c-container">
        <FAQ />
      </div>
    </Layout>
  }
}

export default withData(Legal)