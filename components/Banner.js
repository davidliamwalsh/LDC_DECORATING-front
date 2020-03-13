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

  renderBannerServicesPainting () {
    return this.props.router.pathname === '/services/painting' ? 'c-banner__services c-banner__image' : ''
  }

  renderBannerServicesPaintingTitle () {
    return this.props.router.pathname === '/services/painting' ? 'c-banner__active' : ''
  }

  renderBannerServicesDecorativeCoatings () {
    return this.props.router.pathname === '/services/decorative-coatings' ? 'c-banner__services c-banner__image' : ''
  }

  renderBannerServicesDecorativeCoatingsTitle () {
    return this.props.router.pathname === '/services/decorative-coatings' ? 'c-banner__active' : ''
  }

  renderBannerServicesProtectiveCoatings () {
    return this.props.router.pathname === '/services/protective-coatings' ? 'c-banner__services c-banner__image' : ''
  }

  renderBannerServicesProtectiveCoatingsTitle () {
    return this.props.router.pathname === '/services/protective-coatings' ? 'c-banner__active' : ''
  }

  renderBannerServicesInternalExternalSpray () {
    return this.props.router.pathname === '/services/internal-external-paint-spray' ? 'c-banner__services c-banner__image' : ''
  }

  renderBannerServicesInternalExternalSprayTitle () {
    return this.props.router.pathname === '/services/internal-external-paint-spray' ? 'c-banner__active' : ''
  }

  renderBannerServicesRenderingPlastering () {
    return this.props.router.pathname === '/services/rendering-plastering' ? 'c-banner__services c-banner__image' : ''
  }

  renderBannerServicesRenderingPlasteringTitle () {
    return this.props.router.pathname === '/services/rendering-plastering' ? 'c-banner__active' : ''
  }

  renderBannerServicesCladdingRestoration () {
    return this.props.router.pathname === '/services/cladding-restoration' ? 'c-banner__services c-banner__image' : ''
  }

  renderBannerServicesCladdingRestorationTitle () {
    return this.props.router.pathname === '/services/cladding-restoration' ? 'c-banner__active' : ''
  }

  render () {
    return <div className={`
    c-banner 
    ${this.renderBannerServices()} 
    ${this.renderBannerSectors()} 
    ${this.renderBannerGallery()} 
    ${this.renderBannerTestimonials()} 
    ${this.renderBannerAbout()} 
    ${this.renderBannerContact()} 
    ${this.renderBannerServicesPainting()} 
    ${this.renderBannerServicesDecorativeCoatings()} 
    ${this.renderBannerServicesInternalExternalSpray()} 
    ${this.renderBannerServicesProtectiveCoatings()}
    ${this.renderBannerServicesRenderingPlastering()}
    ${this.renderBannerServicesCladdingRestoration()}
    `}>
      <div className="c-banner__container">
        <div className="c-banner__title" data-aos="zoom-in">
          <h2 className={`c-banner__title--sectors ${this.renderBannerSectorsTitle()}`}>
            Sectors
          </h2>
          <h2 className={`c-banner__title--services ${this.renderBannerServicesTitle()}`}>
            Services
          </h2>
          
          <h2 className={`c-banner__title--gallery ${this.renderBannerGalleryTitle()}`}>
            Gallery
          </h2>
          <h2 className={`c-banner__title--about ${this.renderBannerAboutTitle()}`}>
            About
          </h2>
          <h2 className={`c-banner__title--testimonials ${this.renderBannerTestimonialsTitle()}`}>Testimonials
          </h2>

          <h2 className={`c-banner__title--about ${this.renderBannerServicesPaintingTitle()}`}>
            Painting
          </h2>
          <h2 className={`c-banner__title--about ${this.renderBannerServicesDecorativeCoatingsTitle()}`}>
            Decorative Coatings
          </h2>
          <h2 className={`c-banner__title--about ${this.renderBannerServicesProtectiveCoatingsTitle()}`}>
            Protective Coatings
          </h2>
          <h2 className={`c-banner__title--about ${this.renderBannerServicesInternalExternalSprayTitle()}`}>
            Paint Spray
          </h2>
          <h2 className={`c-banner__title--about ${this.renderBannerServicesCladdingRestorationTitle()}`}>
            Cladding Restoration
          </h2>
          <h2 className={`c-banner__title--about ${this.renderBannerServicesRenderingPlasteringTitle()}`}>
            Rendering &amp; Plastering
          </h2>
          <hr className="c-banner__title--line" />
        </div>
      </div>
    </div>
  }
}

export default withRouter(Banner)