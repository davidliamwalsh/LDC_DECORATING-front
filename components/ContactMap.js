import { Component } from 'react'
import Iframe from 'react-iframe'

class ContactMap extends Component {
  render () {
    return <div className="c-contact-map">
      <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9442.34894042274!2d-1.8152097!3d53.7256152!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe2874560d5904ac3!2sLDC%20Decorating%20Contractors%20Ltd!5e0!3m2!1sen!2suk!4v1583411544857!5m2!1sen!2suk" className="c-contact-map__iframe"
      />
    </div>
  }
}

export default ContactMap