import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

class KeyContactsGrid extends Component {
  render () {
    return <>
    <div className="o-grid-3-2">
      <div className="c-about__grid_card">
        <div className="c-about__grid_card--hero">
          <img className="c-about__grid_card--hero-image" src="../static/1.jpg" alt=" "/>
        </div>
        <div className="c-about__grid_card--head">
          <h4 className="c-about__grid_card--head-main">Katy Clay</h4>
          <h4 className="c-about__grid_card--head-inset">Director</h4>
          <hr className="c-about__grid_card--head-line" />
        </div>
        <div className="c-about__grid_card--text">
          <p>As the founder of our company, David worked as a decorator for over 20 years before establishing LDC Decorating Contractors.</p>
        </div>
        <div className="c-about__grid_card--links">
          <Link href=''>
            <a><FontAwesomeIcon icon={faAt} /></a>
          </Link>
          <Link href='mailto:'>
            <a><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </Link>
        </div>
      </div>

      <div className="c-about__grid_card">
        <div className="c-about__grid_card--hero">
          <img className="c-about__grid_card--hero-image" src="../static/1.jpg" alt=" "/>
        </div>
        <div className="c-about__grid_card--head">
          <h4 className="c-about__grid_card--head-main">Lee Clay</h4>
          <h4 className="c-about__grid_card--head-inset">Director</h4>
          <hr className="c-about__grid_card--head-line" />
        </div>
        <div className="c-about__grid_card--text">
          <p>As the founder of our company, David worked as a decorator for over 20 years before establishing LDC Decorating Contractors.</p>
        </div>
        <div className="c-about__grid_card--links">
          <Link href='mailto:'>
            <a><FontAwesomeIcon icon={faAt} /></a>
          </Link>
          <Link href=''>
            <a><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </Link>
        </div>
      </div>

      <div className="c-about__grid_card">
        <div className="c-about__grid_card--hero">
          <img className="c-about__grid_card--hero-image" src="../static/1.jpg" alt=" "/>
        </div>
        <div className="c-about__grid_card--head">
          <h4 className="c-about__grid_card--head-main">David Walsh</h4>
          <h4 className="c-about__grid_card--head-inset">Web Developer</h4>
          <hr className="c-about__grid_card--head-line" />
        </div>
        <div className="c-about__grid_card--text">
          <p>As the founder of our company, David worked as a decorator for over 20 years before establishing LDC Decorating Contractors.</p>
        </div>
        <div className="c-about__grid_card--links">
          <Link href='mailto:info@davidwalsh.co.uk'>
            <a><FontAwesomeIcon icon={faAt} /></a>
          </Link>
          <Link href='https://www.linkedin.com/in/david-walsh-ab550138/'>
            <a><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </Link>
        </div>
      </div>
    </div>
    </>
  }
}

export default KeyContactsGrid