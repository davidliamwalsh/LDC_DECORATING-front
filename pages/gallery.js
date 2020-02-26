import { Component } from 'react'

import Layout from '../components/Layout'
import GalleryCard from '../components/GalleryCard'

class Gallery extends Component {
  render () {
    return <Layout>
      <div className="c-gallery">
        <div className="c-gallery__title">
          <h2>Next Steps</h2>
        </div>
        <GalleryCard />
      </div>
    </Layout>
  }
}

export default Gallery