import { Component } from 'react'
import HeaderIntro from '../components/HeaderIntro'
import Header from '../components/Header'
import Quote from '../components/Quote'
import ScrolltoTop from '../components/ScrollToTop'
import Footer from '../components/Footer'
import '../scss/application.scss'
import AOS from 'aos';
import MetaTags from 'react-meta-tags';
import { withRouter } from 'next/router'
import CookieConsent from "react-cookie-consent"

class Layout extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    document.body.classList.remove("hidden")
    AOS.init({
      duration : 2000,
      offset: 50
    })
  }

  render () { 
    
    if (this.props.router.pathname === '/contact') {
      return <>
        <MetaTags>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <link id="favicon" rel="icon" href="/static/ldc-logo.png" />
          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <link rel="icon" href="/static/ldc-logo.jpg" />
          <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
          <title>LDC Decorating Contractors</title>
        </MetaTags>
        <HeaderIntro />
        <Header />
        <ScrolltoTop />
          { this.props.children }
        <Footer />
        <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
        <script src="https://unpkg.com/aos@next/dist/aos.js" />
      </>
    } else {
      return <>
        <MetaTags>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <link id="favicon" rel="icon" href="/static/ldc-logo.png" />
          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <link rel="icon" href="/static/ldc-logo.jpg" />
          <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
          <title>LDC Decorating Contractors</title>
        </MetaTags>
        <HeaderIntro />
        <Header />
        <ScrolltoTop />
          { this.props.children }
        <Quote />
        <Footer />
        <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
        <script src="https://unpkg.com/aos@next/dist/aos.js" />
      </>
    }
  }
}

export default withRouter(Layout)