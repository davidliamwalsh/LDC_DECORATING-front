import { Component } from 'react'

class TermsConditions extends Component {
  constructor (props) {
    super(props)

    this.termsClick = this.termsClick.bind(this)
    this.state = {
      termsListOpen: false
    }
  }

  termsClick () {
    this.setState({ termsListOpen: !this.state.termsListOpen })
  }

  renderTermsListOpen () {
    return this.state.termsListOpen ? 'c-legal__item--list-active' : ''
  }

  render () {
    return <div className="c-legal__item">
      <div className="c-legal__item--head">
        <h2 className="c-legal__item--head-title">Terms &amp; Conditions</h2>
        <span className="c-legal__item--head-button" onClick={this.termsClick}>+</span>
      </div>
      <div className="c-legal__item--intro">
        <h4 className="c-legal__item--intro-text">All services available are subject to the terms and conditions stated. The purchase of services through this site indicates your acceptance of these terms and conditions. We reserve the right to change the terms and conditions at any time; you will be bound by the stated version at the time of order confirmation. Please ensure you have read through them carefully.</h4>
      </div>
      <div className={`c-legal__item--list ${this.renderTermsListOpen()}`}>
        <ul className="c-legal__item--list-container">
          <h4 className="c-legal__item--list-title">Copyright</h4>
          <li className="c-legal__item--list-bullet">Reproduction, transfer or distribution of part or all of the contents in any form without the Owners consent or written prior permission is prohibited as this will be considered an infringement of copyright.</li>
        </ul>
        <ul className="c-legal__item--list-container">
          <h4 className="c-legal__item--list-title">Use of the Website</h4>
          <li className="c-legal__item--list-bullet">You agree not to use LDC Decorating Contractors directly or indirectly for any unlawful purpose, or to cause distress or offence to any person. You also agree not to upload, email to us or print any images or other material which might infringe our general compliance rules</li>
          <li className="c-legal__item--list-bullet">We will always try to ensure that LDC Decorating Contractors is available 24 hours a day. However, we will not be liable if for any reason the Website is unavailable at any time, or for any period.</li>
          <li className="c-legal__item--list-bullet">Occasionally, we may provide links to other websites or resources for your convenience. We do not endorse the contents of those websites and are not responsible for their availability or service.</li>
          <li className="c-legal__item--list-bullet">If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern LDC Decorating Contractors relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.</li>
        </ul>
      </div>
    </div>
  }
}

export default TermsConditions