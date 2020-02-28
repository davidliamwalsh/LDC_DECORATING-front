import { Component } from 'react'
import { withRouter } from 'next/router'

class Navbar extends Component {
  constructor (props) {
    super(props)

    this.burgerClick = this.burgerClick.bind(this)
    this.state = {
      navBarOpen: false
    }
  }

  burgerClick () {
    this.setState({ navBarOpen: !this.state.navBarOpen })
  }

  renderBurgerMenu () {
    return this.state.navBarOpen ? 'c-navbar--open' : ''
  }

  addFadeMenu () {
    return this.state.navBarOpen ? 'fade' : ''
  }

  renderTransparantNavBar () {
    return this.props.router.pathname === '/' ? 'c-navbar-active' : ''
  }

  burgerRotateTop () {
    return this.state.navBarOpen ? 'c-navbar__burger-top' : ''
  }

  burgerRotateMiddle () {
    return this.state.navBarOpen ? 'c-navbar__burger-middle' : ''
  }

  burgerRotateBottom () {
    return this.state.navBarOpen ? 'c-navbar__burger-bottom' : ''
  }

  render () {

    return <div className={`c-navbar ${this.renderTransparantNavBar()}`}>
      <div className="c-navbar__logo">
        <a href="#"><img src="/static/ldc-logo.jpg" alt="" /></a>
      </div>
      <div className="c-navbar__burger" onClick={this.burgerClick}>
        <div className={`c-navbar__burger-line--top ${this.burgerRotateTop()}`}></div>
        <div className={`c-navbar__burger-line--middle ${this.burgerRotateMiddle()}`}></div>
        <div className={`c-navbar__burger-line--bottom ${this.burgerRotateBottom()}`}></div>
      </div>
      <div className={`c-navbar__links ${this.renderBurgerMenu()}`}>
        <li className={`c-navbar__link ${this.addFadeMenu()}`}>
          <a href="#">Home</a>
        </li>
        <li className={`c-navbar__link ${this.addFadeMenu()}`}>
          <a href="#">About</a>
        </li>
        <li className={`c-navbar__link ${this.addFadeMenu()}`}>
          <a href="#">Testimonials</a>
        </li>
        <li className={`c-navbar__link ${this.addFadeMenu()}`}>
          <a href="#">Gallery</a>
        </li>
        <li className={`c-navbar__link ${this.addFadeMenu()}`}>
          <a href="#">Contact</a>
        </li>
        <li className={`c-navbar__link c-navbar__action ${this.addFadeMenu()}`}>
          <a className="c-navbar__action-link"href="#">Sign In</a>
          <a className="c-navbar__action-link"href="#"><i className="fas fa-shopping-basket"></i></a>
        </li>
      </div>

      <div className="c-navbar__actions">
        <div className="c-navbar__actions-shop">
          <a href="#">Shop</a>
        </div>
        <div className="c-navbar__actions-signIn">
          <a href="#">Sign In</a>
        </div>
        <div className="c-navbar__actions-checkout">
          <a href="#"><i className="fas fa-shopping-basket"></i></a>
        </div>
      </div>
    </div>  
  }
}

export default withRouter(Navbar)