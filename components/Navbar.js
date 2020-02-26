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
    return <div class={`c-navbar ${this.renderTransparantNavBar()}`}>
      <div class="c-navbar__logo">
        <a href="#"><img src="/static/ldc-logo.jpg" alt="" /></a>
      </div>
      <div class="c-navbar__burger" onClick={this.burgerClick}>
        <div class={`c-navbar__burger-line--top ${this.burgerRotateTop()}`}></div>
        <div class={`c-navbar__burger-line--middle ${this.burgerRotateMiddle()}`}></div>
        <div class={`c-navbar__burger-line--bottom ${this.burgerRotateBottom()}`}></div>
      </div>
      <div class={`c-navbar__links ${this.renderBurgerMenu()}`}>
        <li class={`c-navbar__link ${this.addFadeMenu()}`}>
          <a href="#">New Cars</a>
        </li>
        <li class={`c-navbar__link ${this.addFadeMenu()}`}>
          <a href="#">Electric Cars</a>
        </li>
        <li class={`c-navbar__link ${this.addFadeMenu()}`}>
          <a href="#">Used Cars</a>
        </li>
        <li class={`c-navbar__link ${this.addFadeMenu()}`}>
          <a href="#">Test Drive</a>
        </li>
        <li class={`c-navbar__link ${this.addFadeMenu()}`}>
          <a href="#">Find Us</a>
        </li>
        <li class={`c-navbar__link ${this.addFadeMenu()}`}>
          <a href="#">Support</a>
        </li>
        <li class={`c-navbar__link c-navbar__action ${this.addFadeMenu()}`}>
          <a class="c-navbar__action-link"href="#">Sign In</a>
          <a class="c-navbar__action-link"href="#"><i class="fas fa-shopping-basket"></i></a>
        </li>
      </div>

      <div class="c-navbar__actions">
        <div class="c-navbar__actions-shop">
          <a href="#">Shop</a>
        </div>
        <div class="c-navbar__actions-signIn">
          <a href="#">Sign In</a>
        </div>
        <div class="c-navbar__actions-checkout">
          <a href="#"><i class="fas fa-shopping-basket"></i></a>
        </div>
      </div>
    </div>  
  }
}

export default withRouter(Navbar)