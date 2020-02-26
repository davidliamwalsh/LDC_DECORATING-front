import { Component } from 'react'

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
        <link id="favicon" rel="icon" href="/static/ldc-logo.jpg" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </MetaTags>
      <Header />
        { this.props.children }
      <Footer />
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    </>
  }
}

export default Layout