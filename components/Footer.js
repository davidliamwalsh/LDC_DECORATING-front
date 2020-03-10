import { Component } from 'react'
import NewsArticleFooter from '../components//NewsArticleFooter'
import Link from 'next/link'

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
    return (
      <div className="c-footer__container">
        <div className="c-footer-upper">

          <div className="c-footer-upper__list">
            <div className="c-footer-upper__list--head">
              <h4 className="c-footer-upper__list--head-title">HEADER</h4>
              <hr className="o-line__testimonial" />
              <span className="c-footer-upper__list--head-btn" onClick={this.footerClickFirst}>+</span>
            </div>
            <div className={`c-footer-upper__list--body ${this.renderFooterListFirst()}`}>
              <li className="c-footer-upper__list--item">
                <Link href='/'>
                  <a>Browse the range</a>
                </Link>
              </li>
              <li className="c-footer-upper__list--item">
                <Link href='/'>
                  <a>Fleet</a>
                </Link>
              </li>
              <li className="c-footer-upper__list--item">
                <Link href='/'>
                  <a>View all</a>
                </Link>
              </li>
            </div>
          </div>

          <div className="c-footer-upper__list">
            <div className="c-footer-upper__list--head">
              <h4 className="c-footer-upper__list--head-title">Services</h4>
              <hr className="o-line__testimonial" />
              <span className="c-footer-upper__list--head-btn" onClick={this.footerClickSecond}>+</span>
            </div>
            <div className={`c-footer-upper__list--body ${this.renderFooterListSecond()}`}>
              <li className="c-footer-upper__list--item">
                <Link href='/'>
                  <a>View all</a>
                </Link>
              </li>
              <li className="c-footer-upper__list--item">
                <Link href='/'>
                  <a>View all</a>
                </Link>
              </li>
              <li className="c-footer-upper__list--item">
                <Link href='/'>
                  <a>View all</a>
                </Link>
              </li>
            </div>
          </div>

          <div className="c-footer-upper__list">
            <div className="c-footer-upper__list--head">
              <h4 className="c-footer-upper__list--head-title">Latest News</h4>
              <hr className="o-line__testimonial" />
            </div>
            <div className={`c-footer-upper__list--body footer-item-active`}>
              <NewsArticleFooter newsArticleSize={3} />
            </div>
          </div>

          <div className="c-footer-upper__list">
            <div className="c-footer-upper__list--head">
              <h4 className="c-footer-upper__list--head-title">Contact</h4>
              <hr className="o-line__testimonial" />
            </div>
            <div className={`c-footer-upper__list--body footer-item-active`}>
              <li className="c-footer-upper__list--item c-footer-upper__list--item-lineheight">
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

        <div className="c-footer-lower">
          <div className="c-footer-lower__container">
            <div className="c-footer-lower__copyright">
              <p>Copyright &copy; 2020 LDC Decorating Contractors Ltd. All rights reserved.</p>
            </div>
            <div className="c-footer-lower__list">
              <li className="c-footer-lower__list--item">
                <Link href='/'>
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li className="c-footer-lower__list--item">
                <Link href='/'>
                  <a>Use of Cookies</a>
                </Link>
              </li>
              <li className="c-footer-lower__list--item">
                <Link href='/'>
                  <a>Terms of Use</a>
                </Link>
              </li>
              <li className="c-footer-lower__list--item">
                <Link href='/'>
                  <a>Refunds</a>
                </Link>
              </li>
              <li className="c-footer-lower__list--item">
                <Link href='/'>
                  <a>Legal</a>
                </Link>
              </li>
              <li className="c-footer-lower__list--item">
                <Link href='/'>
                  <a>Site Map</a>
                </Link>
              </li>
            </div>
            <div className="c-footer-lower__promotion">
              <p className="c-footer-lower__promotion--text">
                Website by <Link href='//react-blogger.herokuapp.com/' >
                  <a className="c-footer-lower__promotion--text-link">David Walsh</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer