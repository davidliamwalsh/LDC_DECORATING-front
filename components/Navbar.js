import { Component } from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'

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
    document.body.classList.toggle("hidden")
  }
  
  renderBurgerMenu () {
    return this.state.navBarOpen ? 'c-navbar--open' : ''
  }

  addFadeMenu () {
    return this.state.navBarOpen ? 'fade' : ''
  }

  renderTransparantNavBar () {
    return this.props.router.pathname === '/' ? 'c-nav-home' : ''
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

  componentDidMount() {
    window.addEventListener("scroll", this.handeleScroll);
  }

  handeleScroll() {
    if (window.pageYOffset > 600) {
      document.getElementById("nav").classList.add("c-nav__scroll-down"); 
    } else {
      document.getElementById("nav").classList.remove("c-nav__scroll-down");
    }
  }

  render () {
    
    return (
      <div className={`c-nav ${this.renderTransparantNavBar()}`} id="nav">
        <div className={`c-navbar`}>
          <div className="c-navbar__logo">
            <Link href="/">
              <a><img className="c-navbar__logo--hero" src="/static/ldc-logo.png" alt="" /></a>
            </Link>
          </div>
          <div className="c-navbar__burger" onClick={this.burgerClick}>
            <div className={`c-navbar__burger-line--top ${this.burgerRotateTop()}`}></div>
            <div className={`c-navbar__burger-line--middle ${this.burgerRotateMiddle()}`}></div>
            <div className={`c-navbar__burger-line--bottom ${this.burgerRotateBottom()}`}></div>
          </div>
          <div className={`c-navbar__links ${this.renderBurgerMenu()}`}>
            <li className={`c-navbar__link ${this.addFadeMenu()}`}>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li className={`c-navbar__link ${this.addFadeMenu()}`}>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
            <li className={`c-navbar__link ${this.addFadeMenu()}`}>
              <Link href='/sectors'>
                <a>Sectors</a>
              </Link>
            </li>
            <li className={`c-navbar__link ${this.addFadeMenu()}`}>
              <Link href='/testimonials'>
                <a>Testimonials</a>
              </Link>
            </li>
            <li className={`c-navbar__link ${this.addFadeMenu()}`}>
              <Link href='/careers'>
                <a>Careers</a>
              </Link>
            </li>
            <li className={`c-navbar__link ${this.addFadeMenu()}`}>
              <Link href='/contact'>
                <a>Contact</a>
              </Link>
            </li>
          </div>
        </div> 
      </div>
    )
  }
}

export default withRouter(Navbar)