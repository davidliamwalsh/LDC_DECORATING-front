import { Component } from 'react'
import withData from '../lib/withData'
import Layout from '../components/Layout'

class News extends Component {
  render () {
    return <Layout>
      <p>news</p>
    </Layout>
  }
}

export default withData(News)