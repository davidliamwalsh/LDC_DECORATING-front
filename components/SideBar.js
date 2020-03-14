import { Component } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

class SideBar extends Component {
  render () {
    return <>
      <ul className="c-service-sector-table__main--sidebar--list">
        <h4 className="c-service-sector-table__main--sidebar--list-title">Services Provided</h4>
        <hr className="o-line" />
        <li className="c-service-sector-table__main--sidebar--list-item">
          <span className="c-service-sector-table__main--sidebar--list-item__icon"><FontAwesomeIcon icon={faChevronRight} /></span>
          <Link href='/services/decorative-coatings'>
            <a>Decorative Coatings</a>
          </Link>
        </li>
        <li className="c-service-sector-table__main--sidebar--list-item">
          <span className="c-service-sector-table__main--sidebar--list-item__icon"><FontAwesomeIcon icon={faChevronRight} /></span>
          <Link href='/services/protective-coatings'>
            <a>Protective &amp; Specialist Coatings</a>
          </Link>
        </li>
        <li className="c-service-sector-table__main--sidebar--list-item">
          <span className="c-service-sector-table__main--sidebar--list-item__icon"><FontAwesomeIcon icon={faChevronRight} /></span>
          <Link href='/services/internal-external-paint-spray'>
            <a>Internal &amp; External Paint Spray</a>
          </Link>
        </li>
        <li className="c-service-sector-table__main--sidebar--list-item">
          <span className="c-service-sector-table__main--sidebar--list-item__icon"><FontAwesomeIcon icon={faChevronRight} /></span>
          <Link href='/services/painting'>
            <a>Painting</a>
          </Link>
        </li>
        <li className="c-service-sector-table__main--sidebar--list-item">
          <span className="c-service-sector-table__main--sidebar--list-item__icon"><FontAwesomeIcon icon={faChevronRight} /></span>
          <Link href='/services/cladding-restoration'>
            <a>Cladding Restoration</a>
          </Link>
        </li>
        <li className="c-service-sector-table__main--sidebar--list-item">
          <span className="c-service-sector-table__main--sidebar--list-item__icon"><FontAwesomeIcon icon={faChevronRight} /></span>
          <Link href='/services/rendering-plastering'>
            <a>Rendering &amp; Plastering</a>
          </Link>
        </li>
      </ul>

      <ul className="c-service-sector-table__main--sidebar--list">
        <h4 className="c-service-sector-table__main--sidebar--list-title">View More Sectors</h4>
        <hr className="o-line" />
        <li className="c-service-sector-table__main--sidebar--list-item">
          <span className="c-service-sector-table__main--sidebar--list-item__icon"><FontAwesomeIcon icon={faChevronRight} /></span>
          <Link href='/sectors/schools'>
            <a>Schools &amp; Education</a>
          </Link>
        </li>
        <li className="c-service-sector-table__main--sidebar--list-item">
          <span className="c-service-sector-table__main--sidebar--list-item__icon"><FontAwesomeIcon icon={faChevronRight} /></span>
          <Link href='/sectors/retail-shops'>
            <a>Retail &amp; Fit Outs</a>
          </Link>
        </li>
        <li className="c-service-sector-table__main--sidebar--list-item">
          <span className="c-service-sector-table__main--sidebar--list-item__icon"><FontAwesomeIcon icon={faChevronRight} /></span>
          <Link href='/sectors/factories-industrial'>
            <a>Industrial</a>
          </Link>
        </li>
        <li className="c-service-sector-table__main--sidebar--list-item">
          <span className="c-service-sector-table__main--sidebar--list-item__icon"><FontAwesomeIcon icon={faChevronRight} /></span>
          <Link href='/sectors/offices'>
            <a>Office</a>
          </Link>
        </li>
        <li className="c-service-sector-table__main--sidebar--list-item">
          <span className="c-service-sector-table__main--sidebar--list-item__icon"><FontAwesomeIcon icon={faChevronRight} /></span>
          <Link href='/services/cladding-restoration'>
            <a>Cladding Restoration</a>
          </Link>
        </li>
        <li className="c-service-sector-table__main--sidebar--list-item">
          <span className="c-service-sector-table__main--sidebar--list-item__icon"><FontAwesomeIcon icon={faChevronRight} /></span>
          <Link href='/services/rendering-plastering'>
            <a>Rendering &amp; Plastering</a>
          </Link>
        </li>
      </ul>
    </>
  }
}

export default SideBar