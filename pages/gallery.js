import { Component } from 'react'
import withData from '../lib/withData'
import Layout from '../components/Layout'
import GalleryCard from '../components/GalleryCard'

class Gallery extends Component {
  render () {
    return <Layout>
      <div className="c-gallery">
        <GalleryCard />
      </div>
    </Layout>
  }
}

export default withData(Gallery)