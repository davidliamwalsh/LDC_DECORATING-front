import { Component } from 'react'

class Footer extends Component {
  constructor (props) {
    super(props)

    this.footerClickFirst = this.footerClickFirst.bind(this)
    this.footerClickSecond = this.footerClickSecond.bind(this)
    this.footerClickThird = this.footerClickThird.bind(this)
    this.state = {
      footerBarFirstOpen: false,
      footerBarSecondOpen: false,
      footerBarThirdOpen: false
    }
  }

  footerClickFirst () {
    this.setState({ footerBarFirstOpen: !this.state.footerBarFirstOpen })
  }

  footerClickSecond () {
    this.setState({ footerBarSecondOpen: !this.state.footerBarSecondOpen })
  }

  footerClickThird () {
    this.setState({ footerBarThirdOpen: !this.state.footerBarThirdOpen })
  }

  renderFooterListFirst () {
    return this.state.footerBarFirstOpen ? 'active' : ''
  }

  renderFooterListSecond () {
    return this.state.footerBarSecondOpen ? 'active' : ''
  }

  renderFooterListThird () {
    return this.state.footerBarThirdOpen ? 'active' : ''
  }
  
  render () {
    return <>
    <div className="c-footer__container">
      <div className="c-footer--upper">

        <div className="c-footer--upper__list">
          <div className="c-footer--upper__list--head">
            <h4 className="c-footer--upper__list--head-title">HEADER</h4>
            <span className="c-footer--upper__list--head-btn" onClick={this.footerClickFirst}>+</span>
          </div>
          <div className={`c-footer--upper__list--body ${this.renderFooterListFirst()}`}>
            <li className="c-footer--upper__list--item">
              <a href="#">Browse the range</a>
            </li>
            <li className="c-footer--upper__list--item">
              <a href="#">Fleet</a>
            </li>
            <li className="c-footer--upper__list--item">
              <a href="#">Technology</a>
            </li>
          </div>
        </div>

        <div className="c-footer--upper__list">
          <div className="c-footer--upper__list--head">
            <h4 className="c-footer--upper__list--head-title">HEADER</h4>
            <span className="c-footer--upper__list--head-btn" onClick={this.footerClickSecond}>+</span>
          </div>
          <div className={`c-footer--upper__list--body ${this.renderFooterListSecond()}`}>
            <li className="c-footer--upper__list--item">
              <a href="#">Browse the range</a>
            </li>
            <li className="c-footer--upper__list--item">
              <a href="#">Fleet</a>
            </li>
            <li className="c-footer--upper__list--item">
              <a href="#">Technology</a>
            </li>
          </div>
        </div>

        <div className="c-footer--upper__list">
          <div className="c-footer--upper__list--head">
            <h4 className="c-footer--upper__list--head-title">HEADER</h4>
            <span className="c-footer--upper__list--head-btn" onClick={this.footerClickThird}>+</span>
          </div>
          <div className={`c-footer--upper__list--body ${this.renderFooterListThird()}`}>
            <li className="c-footer--upper__list--item">
              <a href="#">Browse the range</a>
            </li>
            <li className="c-footer--upper__list--item">
              <a href="#">Fleet</a>
            </li>
            <li className="c-footer--upper__list--item">
              <a href="#">Technology</a>
            </li>
          </div>
        </div>
      </div>

      <div className="c-footer--lower">
        <div className="c-footer--lower__container">
          <div className="c-footer--lower__copyright">
            <p>Copyright &copy; 2020 Volkswagen. All rights reserved.</p>
          </div>
          <div className="c-footer--lower__list">
            <li className="c-footer--lower__list--item">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="c-footer--lower__list--item">
              <a href="#">Use of Cookies</a>
            </li>
            <li className="c-footer--lower__list--item">
              <a href="#">Terms of Use</a>
            </li>
            <li className="c-footer--lower__list--item">
              <a href="#">Sales and Refunds</a>
            </li>
            <li className="c-footer--lower__list--item">
              <a href="#">Legal</a>
            </li>
            <li className="c-footer--lower__list--item">
              <a href="#">Site Map</a>
            </li>
          </div>
        </div>
      </div>
    </div>
  </>
  }
}

export default Footer