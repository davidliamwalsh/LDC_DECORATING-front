import { Component } from 'react'

class FAQ extends Component {
  constructor (props) {
    super(props)

    this.faqClick = this.faqClick.bind(this)
    this.state = {
      faqListOpen: false
    }
  }

  faqClick () {
    this.setState({ faqListOpen: !this.state.faqListOpen })
  }

  renderFAQListOpen () {
    return this.state.faqListOpen ? 'c-legal__item--list-active' : ''
  }

  render () {
    return <div className="c-legal__item">
      <div className="c-legal__item--head">
        <h2 className="c-legal__item--head-title">FAQ</h2>
        <span className="c-legal__item--head-button" onClick={this.faqClick}>+</span>
      </div>
      <div className="c-legal__item--intro">
        <h4 className="c-legal__item--intro-text">This section is reserved for any questions which we believe will be relevant or helpful to future customers.</h4>
      </div>
      <div className={`c-legal__item--list ${this.renderFAQListOpen()}`}>
        <li className="c-legal__item--list-bullet">Is it free to get a quote?<br />
        Yes, it is free to get an assesment and quote.
        </li>
      </div>
    </div>
  }
}

export default FAQ