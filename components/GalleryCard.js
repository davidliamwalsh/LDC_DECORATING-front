import { Component } from 'react'

class GalleryCard extends Component {
  render () {
    return (
      <div className="c-gallery__grid-container">
        <div className="c-gallery__grid-item1 c-gallery__grid-item" data-aos="fade-right">
          <div className="c-gallery__grid-item--button">
            <svg>
              <polygon points="60 0, 60 80, 31 65, 0 80, 0 0" fill="#28A745" />
            </svg>
            <div className="c-gallery__grid-item--button__text">
              <span>View</span>
              <span>More</span>
            </div>
          </div>
        </div>
        <div className="c-gallery__grid-item2 c-gallery__grid-item" data-aos="fade-up">
          <div className="c-gallery__grid-item--button">
            <svg>
              <polygon points="60 0, 60 80, 31 65, 0 80, 0 0" fill="#28A745" />
            </svg>
            <div className="c-gallery__grid-item--button__text">
              <span>View</span>
              <span>More</span>
            </div>
          </div>
        </div>
        <div className="c-gallery__grid-item3 c-gallery__grid-item" data-aos="fade-up">
          <div className="c-gallery__grid-item--button">
            <svg>
              <polygon points="60 0, 60 80, 31 65, 0 80, 0 0" fill="#28A745" />
            </svg>
            <div className="c-gallery__grid-item--button__text">
              <span>View</span>
              <span>More</span>
            </div>
          </div>
        </div>  
        <div className="c-gallery__grid-item4 c-gallery__grid-item" data-aos="fade-down">
          <div className="c-gallery__grid-item--button">
            <svg>
              <polygon points="60 0, 60 80, 31 65, 0 80, 0 0" fill="#28A745" />
            </svg>
            <div className="c-gallery__grid-item--button__text">
              <span>View</span>
              <span>More</span>
            </div>
          </div>
        </div>
        <div className="c-gallery__grid-item5 c-gallery__grid-item" data-aos="fade-left">
          <div className="c-gallery__grid-item--button">
            <svg>
              <polygon points="60 0, 60 80, 31 65, 0 80, 0 0" fill="#28A745" />
            </svg>
            <div className="c-gallery__grid-item--button__text">
              <span>View</span>
              <span>More</span>
            </div>
          </div>
        </div>
        <div className="c-gallery__grid-item6 c-gallery__grid-item" data-aos="fade-up">
          <div className="c-gallery__grid-item--button">
            <svg>
              <polygon points="60 0, 60 80, 31 65, 0 80, 0 0" fill="#28A745" />
            </svg>
            <div className="c-gallery__grid-item--button__text">
              <span>View</span>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GalleryCard