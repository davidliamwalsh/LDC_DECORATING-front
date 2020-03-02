import { Component } from 'react'
import HeaderIntro from '../components/HeaderIntro'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../scss/application.scss'
import AOS from 'aos';
import MetaTags from 'react-meta-tags';

class Layout extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }
  render () {
    return <>
      <MetaTags>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link id="favicon" rel="icon" href="/static/ldc-logo.jpg" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </MetaTags>
      <HeaderIntro />
      <Header />
        { this.props.children }
      <Footer />
      <script src="https://unpkg.com/aos@next/dist/aos.js" />
    </>
  }
}

export default Layout