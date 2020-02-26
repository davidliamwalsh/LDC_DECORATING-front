import { Component } from 'react'
import { withRouter } from 'next/router'
import Navbar from './Navbar'

class Header extends Component {
  render () {
    if (this.props.router.pathname === '/') {
      return <header className="c-header">
        <div className="c-header__image">
          <Navbar />
        </div>
      </header>
    } else {
      return <Navbar />
    }
  }
}

export default withRouter(Header)