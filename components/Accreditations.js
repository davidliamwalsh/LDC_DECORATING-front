import { Component } from 'react'

class Accreditations extends Component {
  render () {
    return <>
      <div className="c-accreditations">
        <ul className="c-accreditations__items">
          <li className="c-accreditations__items--item">
            <img className="c-accreditations__items--item-img" src="/static/ipaf.jpg" alt=""/>
          </li>
          <li className="c-accreditations__items--item">
            <img className="c-accreditations__items--item-img" src="/static/cscs.jpg" alt=""/>
          </li>
          <li className="c-accreditations__items--item">
            <img className="c-accreditations__items--item-img" src="/static/alcumus.jpg" alt=""/>
          </li>
          <li className="c-accreditations__items--item">
            <img className="c-accreditations__items--item-img" src="/static/chas.jpg" alt=""/>
          </li>
          <li className="c-accreditations__items--item">
            <img className="c-accreditations__items--item-img" src="/static/ukata.jpg" alt=""/>
          </li>
        </ul>
      </div>
    </>
  }
}

export default Accreditations