import { Component } from 'react'
import withData from '../lib/withData'
import Layout from '../components/Layout'
import ContactMap from '../components/ContactMap'
import ContactForm from '../components/ContactForm'

class Contact extends Component {
  render () {
    return <Layout>
      <ContactMap />
      <div className="c-contact__message">
        <h4 className="c-contact__message--title">Take a look at some of the feedback we have received from clients. In a customer service survey, 100% of respondents stated that they would recommend our service and use us again in the future.</h4>
        <h5 className="c-contact__message--inset">Take a look at some of the feedback we have received from clients. In a customer service survey, 100% of respondents stated that they would recommend our service and use us again in the future.</h5>
      </div>
      <ContactForm />
    </Layout>
  }
}

export default withData(Contact)