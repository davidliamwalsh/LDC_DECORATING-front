import { Component } from 'react'
import NewsArticleFooter from '../components//NewsArticleFooter'

class Footer extends Component {
  constructor (props) {
    super(props)

    this.footerClickFirst = this.footerClickFirst.bind(this)
    this.footerClickSecond = this.footerClickSecond.bind(this)
    this.state = {
      footerBarFirstOpen: false,
      footerBarSecondOpen: false
    }
  }

  footerClickFirst () {
    this.setState({ footerBarFirstOpen: !this.state.footerBarFirstOpen })
  }

  footerClickSecond () {
    this.setState({ footerBarSecondOpen: !this.state.footerBarSecondOpen })
  }

  renderFooterListFirst () {
    return this.state.footerBarFirstOpen ? 'footer-item-active' : ''
  }

  renderFooterListSecond () {
    return this.state.footerBarSecondOpen ? 'footer-item-active' : ''
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
            <h4 className="c-footer--upper__list--head-title">Services</h4>
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
            <h4 className="c-footer--upper__list--head-title">Latest News</h4>
          </div>
          <div className={`c-footer--upper__list--body active`}>
            <NewsArticleFooter newsArticleSize={3} />
          </div>
        </div>

        <div className="c-footer--upper__list">
          <div className="c-footer--upper__list--head">
            <h4 className="c-footer--upper__list--head-title">Contact</h4>
          </div>
          <div className={`c-footer--upper__list--body active`}>
            <li className="c-footer--upper__list--item">
              <p>
                LDC Decorating Contractors Ltd<br />
                Chamber 2<br />
                Whitehall Chambers<br />
                Halifax Road<br />
                Hipperholme, Halifax<br />
                HX3 8EN
              </p>
              <p>Tel: 03303 201070</p>
              <p>Office Hours: Mon-Fri 9am - 6pm</p>
            </li>
          </div>
        </div>
      </div>

      <div className="c-footer--lower">
        <div className="c-footer--lower__container">
          <div className="c-footer--lower__copyright">
            <p>Copyright &copy; 2020 LDC Decorating Contractors Ltd. All rights reserved.</p>
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