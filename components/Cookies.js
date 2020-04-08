import { Component } from 'react'

class Cookies extends Component {

  render () {
    return <div className="c-legal__item">
      <div className="c-legal__item--head">
        <h2 className="c-legal__item--head-title">Cookies</h2>
      </div>
      <div className="c-legal__item--intro">
        <h4 className="c-legal__item--intro-text">Cookies are created when a user's browser loads a particular website. The website sends information to the browser which then creates a text file. Every time the user goes back to the same website, the browser retrieves and sends this file to the website's server.</h4>
      </div>
      <div className="c-legal__item--intro">
        <h4 className="c-legal__item--intro-text">To make full use of our website and to benefit from certain personalised features, your computer, tablet or mobile phone will need to be set up to accept cookies. The LDC Decorating Contractors website (like many other shopping websites) may not work correctly when cookies are blocked.</h4>
      </div>
    </div>
  }
}

export default Cookies