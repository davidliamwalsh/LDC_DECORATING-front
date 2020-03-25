import { Component } from 'react'
import Link from 'next/link'

class SectorsGrid extends Component {
  render () {
    return (
      <div className="c-service-sector--grid">
        <div className="c-service-sector--grid__item" data-aos="fade-right">
          <div className="c-service-sector--grid__item--title">
            <h2>Retail &amp; Shop Fitting</h2>
            <hr className="o-line" />
          </div>
          <Link href='/sectors/retail-shops'>
            <a><div className="c-service-sector--grid__item--image c-service-sector--grid__item--wall-coverings" /></a>
          </Link>
          <div className="c-service-sector--grid__item--footer">
            <h4>MAKE YOUR BUSINESS STAND OUT</h4>
          </div>
        </div>

        <div className="c-service-sector--grid__item" data-aos="fade-left">
          <div className="c-service-sector--grid__item--title">
            <h2>Factories &amp; Industrial</h2>
            <hr className="o-line" />
          </div>
          <Link href='/sectors/factories-industrial'>
            <a><div className="c-service-sector--grid__item--image c-service-sector--grid__item--wall-coverings" /></a>
          </Link>
          <div className="c-service-sector--grid__item--footer">
            <h4>INTERIOR &amp; EXTERIOR REFURBISHMENTS</h4>
          </div>
        </div>

        <div className="c-service-sector--grid__item" data-aos="fade-right">
          <div className="c-service-sector--grid__item--title">
            <h2>Schools</h2>
            <hr className="o-line" />
          </div>
          <Link href='/sectors/schools'>
            <a><div className="c-service-sector--grid__item--image c-service-sector--grid__item--wall-coverings" /></a>
          </Link>
          <div className="c-service-sector--grid__item--footer">
            <h4>EDUCATION REDECORATION SPECIALISTS</h4>
          </div>
        </div>

        <div className="c-service-sector--grid__item" data-aos="fade-left">
          <div className="c-service-sector--grid__item--title">
            <h2>Office Space</h2>
            <hr className="o-line" />
          </div>
          <Link href='/sectors/offices'>
            <a><div className="c-service-sector--grid__item--image c-service-sector--grid__item--wall-coverings" /></a>
          </Link>
          <div className="c-service-sector--grid__item--footer">
            <h4>OFFICE REDECORATION SERVICES</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default SectorsGrid