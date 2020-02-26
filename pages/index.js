import { Component } from 'react'
import withData from '../lib/withData'
import TestimonialCard from '../components/TestimonialCard'
import NewsArticleCard from '../components/NewsArticleCard'
import Layout from '../components/Layout'

class Index extends Component {

  render () {
    return <Layout>
      <NewsArticleCard newsArticleSize={3} />
      <TestimonialCard testimonialSize={3} />
    </Layout>
  }
}

export default withData(Index)