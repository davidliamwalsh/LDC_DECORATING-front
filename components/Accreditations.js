import { Component } from 'react'

class Accreditations extends Component {
  render () {
    return <>
      <div className="c-accreditations">
        <ul className="c-accreditations__items">
          <li className="c-accreditations__items--item" data-aos="fade">
            <img className="c-accreditations__items--item-img" src="/static/accreditations/ipaf.jpg" alt=""/ >
          </li>
          <li className="c-accreditations__items--item" data-aos="fade">
            <img className="c-accreditations__items--item-img" src="/static/accreditations/cscs.jpg" alt=""/>
          </li>
          <li className="c-accreditations__items--item" data-aos="fade">
            <img className="c-accreditations__items--item-img" src="/static/accreditations/alcumus.jpg" alt=""/>
          </li>
          <li className="c-accreditations__items--item" data-aos="fade">
            <img className="c-accreditations__items--item-img" src="/static/accreditations/chas.jpg" alt=""/>
          </li>
          <li className="c-accreditations__items--item" data-aos="fade">
            <img className="c-accreditations__items--item-img" src="/static/accreditations/ukata.jpg" alt=""/>
          </li>
        </ul>
      </div>
    </>
  }
}

export default Accreditations