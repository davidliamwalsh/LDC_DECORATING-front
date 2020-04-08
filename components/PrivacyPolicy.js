import { Component } from 'react'

class PrivacyPolicy extends Component {
  constructor (props) {
    super(props)

    this.privacyClick = this.privacyClick.bind(this)
    this.state = {
      privacyListOpen: false
    }
  }

  privacyClick () {
    this.setState({ privacyListOpen: !this.state.privacyListOpen })
  }

  renderPrivacyListOpen () {
    return this.state.privacyListOpen ? 'c-legal__item--list-active' : ''
  }

  render () {
    return <div className="c-legal__item">
      <div className="c-legal__item--head">
        <h2 className="c-legal__item--head-title">Privacy Policy</h2>
        <span className="c-legal__item--head-button" onClick={this.privacyClick}>+</span>
      </div>
      <div className="c-legal__item--intro">
        <h4 className="c-legal__item--intro-text">This Privacy Notice applies to use of www.ldcdecoratingcontractors.co.uk (the "Website"), any LDC Decorating Contractors application that you access (the "App") and any products, services and material of any kind available through the Website, the App or us (the "Services").
        <br />
        This privacy notice explains how we collect, store and use personal data about you when you visit the Website or App, buy Products from us or otherwise provide your personal data to us.</h4>
      </div>
      <div className={`c-legal__item--list ${this.renderPrivacyListOpen()}`}>
        <ul className="c-legal__item--list-container">
          <h4 className="c-legal__item--list-title">What data we gather</h4>
          <li className="c-legal__item--list-bullet">Name</li>
          <li className="c-legal__item--list-bullet">Contact information including email address and telephone number</li>
          <li className="c-legal__item--list-bullet">Demographic information, such as postcode, preferences and interests</li>
          <li className="c-legal__item--list-bullet">Website usage data</li>
          <li className="c-legal__item--list-bullet">Other information pertaining to job applications and customer feedback surveys</li>
        </ul>
        <ul className="c-legal__item--list-container">
          <h4 className="c-legal__item--list-title">How we use this data</h4>
          <li className="c-legal__item--list-bullet">For our own internal records</li>
          <li className="c-legal__item--list-bullet">To improve the products and services we provide</li>
          <li className="c-legal__item--list-bullet">To contact you in response to a specific enquiry</li>
          <li className="c-legal__item--list-bullet">To customise the website for you</li>
          <li className="c-legal__item--list-bullet">To consider you for a job application</li>
        </ul>
      </div>
    </div>
  }
}

export default PrivacyPolicy