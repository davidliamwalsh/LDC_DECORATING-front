import { Component } from 'react'

class GalleryCard extends Component {
  render () {
    return (
      <div className="c-gallery__grid-container">
        <div className="c-gallery__grid-item1 c-gallery__grid-item" data-aos="fade-right">
          <button className="o-button__gallery">Discover More</button>
        </div>
        <div className="c-gallery__grid-item2 c-gallery__grid-item" data-aos="fade-up">
          <button className="o-button__gallery">Discover More</button>
        </div>
        <div className="c-gallery__grid-item3 c-gallery__grid-item" data-aos="fade-up">
          <button className="o-button__gallery">Discover More</button>
        </div>  
        <div className="c-gallery__grid-item4 c-gallery__grid-item" data-aos="fade-down">
          <button className="o-button__gallery">Discover More</button>
        </div>
        <div className="c-gallery__grid-item5 c-gallery__grid-item" data-aos="fade-left">
          <button className="o-button__gallery">Discover More</button>
        </div>
        <div className="c-gallery__grid-item6 c-gallery__grid-item" data-aos="fade-up">
          <button className="o-button__gallery">Discover More</button>
        </div>
      </div>
    )
  }
}

export default GalleryCard