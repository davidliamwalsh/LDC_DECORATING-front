import { Component } from 'react'
import Layout from '../components/Layout'
import withData from '../lib/withData'
import SectorsGrid from '../components/SectorsGrid'

class Sectors extends Component {
  render () {
    return <Layout>
      <div className="o-head--intro">
        <h4 className="o-head--intro__title">With over thirty year’s experience working in virtually all commercial and industrial sectors, there is nobody better placed than LDC Decorating Contractors to assist you with your painting and decorating needs. Take a look at some of our case studies below.</h4>
      </div>

      <div className="c-container">
        <SectorsGrid />
      </div>
      
    </Layout>
  }
}

export default withData(Sectors)