import { Component } from 'react'
import Link from 'next/link'

class HeaderIntro extends Component {
  
  render () {
    return <div className="c-top" id="head-intro">
      <div className="c-header-intro">
        <div className="c-header-intro__container">
          <div className="c-header-intro__contact">
            <li className="c-header-intro__contact--inset">
              <Link href='tel:03303201070'>
                <a>03303 201070</a>
              </Link>
            </li>
            <li>|</li>
            <li className="c-header-intro__contact--inset">
              <Link href='mailto:info@ldcdecoratingcontractors.co.uk'>
                <a>info@ldcdecoratingcontractors.co.uk</a>
              </Link>
            </li>
          </div>
          <div className="c-header-intro__links">
            <li className="c-header-intro__links--link">
              <Link href='/services'>
                <a>Services</a>
              </Link>
            </li>
            <li>|</li>
            <li className="c-header-intro__links--link">
              <Link href='/contact'>
                <a>Contact</a>
              </Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  }
}

export default HeaderIntro