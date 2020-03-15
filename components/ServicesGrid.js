import { Component } from 'react'
import Link from 'next/link'

class ServicesGrid extends Component {
  render () {
    return (
      <div className="c-service-sector--grid">
        <div className="c-service-sector--grid__item" data-aos="fade-right">
          <div className="c-service-sector--grid__item--title">
            <h2>Decorative Wall Coatings</h2>
            <hr className="o-line" />
          </div>
          <Link href='/services/decorative-coatings'>
            <a><div className="c-service-sector--grid__item--image c-service-sector--grid__item--wall-coverings" /></a>
          </Link>
          <div className="c-service-sector--grid__item--footer">
            <h4>Visual Wall Decorations</h4>
          </div>
        </div>
        <div className="c-service-sector--grid__item" data-aos="fade-left">
          <div className="c-service-sector--grid__item--title">
            <h2>Protective &amp; Specialist Coatings</h2>
            <hr className="o-line" />
          </div>
          <Link href='/services/protective-coatings'>
            <a><div className="c-service-sector--grid__item--image c-service-sector--grid__item--wall-coverings" /></a>
          </Link>
          <div className="c-service-sector--grid__item--footer">
            <h4>KNOWLEDGE &amp; EXPERTISE</h4>
          </div>
        </div>
        <div className="c-service-sector--grid__item" data-aos="fade-right">
          <div className="c-service-sector--grid__item--title">
            <h2>Painting</h2>
            <hr className="o-line" />
          </div>
          <Link href='/services/painting'>
            <a><div className="c-service-sector--grid__item--image c-service-sector--grid__item--wall-coverings" /></a>
          </Link>
          <div className="c-service-sector--grid__item--footer">
            <h4>PROFESSIONAL PAINTING SERVICES</h4>
          </div>
        </div>
        <div className="c-service-sector--grid__item" data-aos="fade-left">
          <div className="c-service-sector--grid__item--title">
            <h2>Internal &amp; External Paint Spray</h2>
            <hr className="o-line" />
          </div>
          <Link href='/services/internal-external-paint-spray'>
            <a><div className="c-service-sector--grid__item--image c-service-sector--grid__item--wall-coverings" /></a>
          </Link>
          <div className="c-service-sector--grid__item--footer">
            <h4>PROFESSIONAL PAINT SPRAYING</h4>
          </div>
        </div>
        <div className="c-service-sector--grid__item" data-aos="fade-right">
          <div className="c-service-sector--grid__item--title">
            <h2>Cladding Restoration</h2>
            <hr className="o-line" />
          </div>
          <Link href='/services/cladding-restoration'>
            <a><div className="c-service-sector--grid__item--image c-service-sector--grid__item--wall-coverings" /></a>
          </Link>
          <div className="c-service-sector--grid__item--footer">
            <h4>EXTERNAL REFURBISHMENTS</h4>
          </div>
        </div>
        <div className="c-service-sector--grid__item" data-aos="fade-left">
          <div className="c-service-sector--grid__item--title">
            <h2>Rendering &amp; Plastering</h2>
            <hr className="o-line" />
          </div>
          <Link href='/services/rendering-plastering'>
            <a><div className="c-service-sector--grid__item--image c-service-sector--grid__item--wall-coverings" /></a>
          </Link>
          <div className="c-service-sector--grid__item--footer">
            <h4>PRIOR TO PAINT REPAIRS</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default ServicesGrid