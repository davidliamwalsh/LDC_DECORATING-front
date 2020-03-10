import { Component } from 'react'
import Link from 'next/link'

class Quote extends Component {
  render () {
    return <>
      <div className="c-quote">
        <div className="c-quote__item">
          <p className="c-quote__item--text">FOR A FREE, NO OBLIGATION QUOTE</p>
          <Link href='/contact'>
              <a className="c-quote__item--button">Send us a message</a>
          </Link>
        </div>
      </div>
    </>
  }
}

export default Quote