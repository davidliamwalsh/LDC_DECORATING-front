import { Component } from 'react'
import { withRouter } from 'next/router'

class Banner extends Component {

  renderBannerSectors () {
    return this.props.router.pathname === '/sectors' ? 'c-banner__sectors c-banner__image' : ''
  }

  renderBannerSectorsTitle () {
    return this.props.router.pathname === '/sectors' ? 'c-banner__active' : ''
  }

  renderBannerServices () {
    return this.props.router.pathname === '/services' ? 'c-banner__services c-banner__image' : ''
  }

  renderBannerServicesTitle () {
    return this.props.router.pathname === '/services' ? 'c-banner__active' : ''
  }

  renderBannerTestimonials () {
    return this.props.router.pathname === '/testimonials' ? 'c-banner__testimonials c-banner__image' : ''
  }

  renderBannerTestimonialsTitle () {
    return this.props.router.pathname === '/testimonials' ? 'c-banner__active' : ''
  }

  renderBannerGallery () {
    return this.props.router.pathname === '/gallery' ? 'c-banner__gallery c-banner__image' : ''
  }

  renderBannerGalleryTitle () {
    return this.props.router.pathname === '/gallery' ? 'c-banner__active' : ''
  }

  renderBannerAbout () {
    return this.props.router.pathname === '/about' ? 'c-banner__about c-banner__image' : ''
  }

  renderBannerAboutTitle () {
    return this.props.router.pathname === '/about' ? 'c-banner__active' : ''
  }

  renderBannerContact () {
    return this.props.router.pathname === '/contact' ? 'c-banner__contact' : ''
  }
  render () {
    return <div className={`c-banner ${this.renderBannerServices()} ${this.renderBannerSectors()} ${this.renderBannerGallery()} ${this.renderBannerTestimonials()} ${this.renderBannerAbout()} ${this.renderBannerContact()}`}>
      <div className="c-banner__container">
        <div className="c-banner__title" data-aos="fade-up">
          <h2 className={`c-banner__title--sectors ${this.renderBannerSectorsTitle()}`}>Sectors</h2>
          <h2 className={`c-banner__title--services ${this.renderBannerServicesTitle()}`}>Services</h2>
          
          <h2 className={`c-banner__title--gallery ${this.renderBannerGalleryTitle()}`}>Gallery</h2>
          <h2 className={`c-banner__title--about ${this.renderBannerAboutTitle()}`}>About</h2>
          <h2 className={`c-banner__title--testimonials ${this.renderBannerTestimonialsTitle()}`}>Testimonials</h2>
          <hr className="c-banner__title--line" />
        </div>
      </div>
    </div>
  }
}

export default withRouter(Banner)