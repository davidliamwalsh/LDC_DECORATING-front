import { Component } from 'react'
import { withRouter } from 'next/router'

class Banner extends Component {

  renderBannerSectors () {
    return this.props.router.pathname === '/sectors' ? 'c-banner__sectors c-banner__image' : ''
  }
  renderBannerServices () {
    return this.props.router.pathname === '/services' ? 'c-banner__services c-banner__image' : ''
  }
  renderBannerTestimonials () {
    return this.props.router.pathname === '/testimonials' ? 'c-banner__testimonials c-banner__image' : ''
  }
  renderBannerAbout () {
    return this.props.router.pathname === '/about' ? 'c-banner__about c-banner__image' : ''
  }
  renderBannerCareers () {
    return this.props.router.pathname === '/careers' ? 'c-banner__careers c-banner__image' : ''
  }
  renderBannerNews () {
    return this.props.router.pathname === '/news' ? 'c-banner__news c-banner__image' : ''
  }

  renderBannerContact () {
    return this.props.router.pathname === '/contact' ? 'c-banner__none' : ''
  }
  renderBannerLegal () {
    return this.props.router.pathname === '/legal' ? 'c-banner__none' : ''
  }

  renderBannerServicesPainting () {
    return this.props.router.pathname === '/services/painting' ? 'c-banner__services--painting c-banner__image' : ''
  }
  renderBannerServicesDecorativeCoatings () {
    return this.props.router.pathname === '/services/decorative-coatings' ? 'c-banner__services--decorative c-banner__image' : ''
  }
  renderBannerServicesProtectiveCoatings () {
    return this.props.router.pathname === '/services/protective-coatings' ? 'c-banner__services--specialist c-banner__image' : ''
  }
  renderBannerServicesInternalExternalSpray () {
    return this.props.router.pathname === '/services/internal-external-paint-spray' ? 'c-banner__services--paintspray c-banner__image' : ''
  }
  renderBannerServicesRenderingPlastering () {
    return this.props.router.pathname === '/services/rendering-plastering' ? 'c-banner__services--plastering c-banner__image' : ''
  }
  renderBannerServicesCladdingRestoration () {
    return this.props.router.pathname === '/services/cladding-restoration' ? 'c-banner__services--cladding c-banner__image' : ''
  }

  renderBannerSectorsFactoriesIndustrial () {
    return this.props.router.pathname === '/sectors/factories-industrial' ? 'c-banner__sectors--industrial c-banner__image' : ''
  }
  renderBannerSectorsOffice () {
    return this.props.router.pathname === '/sectors/offices' ? 'c-banner__sectors--office c-banner__image' : ''
  }
  renderBannerSectorsRetailShop () {
    return this.props.router.pathname === '/sectors/retail-shops' ? 'c-banner__sectors--retail c-banner__image' : ''
  }
  renderBannerSectorsSchools () {
    return this.props.router.pathname === '/sectors/schools' ? 'c-banner__sectors--education c-banner__image' : ''
  }

  renderBannerSectorsTitle () {
    return this.props.router.pathname === '/sectors' ? 'c-banner__active' : ''
  }
  renderBannerServicesTitle () {
    return this.props.router.pathname === '/services' ? 'c-banner__active' : ''
  }
  renderBannerTestimonialsTitle () {
    return this.props.router.pathname === '/testimonials' ? 'c-banner__active' : ''
  }
  renderBannerAboutTitle () {
    return this.props.router.pathname === '/about' ? 'c-banner__active' : ''
  }
  renderBannerCareersTitle () {
    return this.props.router.pathname === '/careers' ? 'c-banner__active' : ''
  }
  renderBannerNewsTitle () {
    return this.props.router.pathname === '/news' ? 'c-banner__active' : ''
  }

  renderBannerServicesPaintingTitle () {
    return this.props.router.pathname === '/services/painting' ? 'c-banner__active' : ''
  }
  renderBannerServicesDecorativeCoatingsTitle () {
    return this.props.router.pathname === '/services/decorative-coatings' ? 'c-banner__active' : ''
  }
  renderBannerServicesProtectiveCoatingsTitle () {
    return this.props.router.pathname === '/services/protective-coatings' ? 'c-banner__active' : ''
  }
  renderBannerServicesInternalExternalSprayTitle () {
    return this.props.router.pathname === '/services/internal-external-paint-spray' ? 'c-banner__active' : ''
  }
  renderBannerServicesRenderingPlasteringTitle () {
    return this.props.router.pathname === '/services/rendering-plastering' ? 'c-banner__active' : ''
  }
  renderBannerServicesCladdingRestorationTitle () {
    return this.props.router.pathname === '/services/cladding-restoration' ? 'c-banner__active' : ''
  }
  renderBannerSectorsFactoriesIndustrialTitle () {
    return this.props.router.pathname === '/sectors/factories-industrial' ? 'c-banner__active' : ''
  }
  renderBannerSectorsOfficeTitle () {
    return this.props.router.pathname === '/sectors/offices' ? 'c-banner__active' : ''
  }
  renderBannerSectorsRetailShopTitle () {
    return this.props.router.pathname === '/sectors/retail-shops' ? 'c-banner__active' : ''
  }
  renderBannerSectorsSchoolsTitle () {
    return this.props.router.pathname === '/sectors/schools' ? 'c-banner__active' : ''
  }

  render () {
    
    return <div className={`
    c-banner 
    ${this.renderBannerServices()} 
    ${this.renderBannerSectors()} 
    ${this.renderBannerTestimonials()} 
    ${this.renderBannerAbout()} 
    ${this.renderBannerContact()}
    ${this.renderBannerLegal()}
    ${this.renderBannerNews()}
    ${this.renderBannerCareers()}

    ${this.renderBannerServicesPainting()} 
    ${this.renderBannerServicesDecorativeCoatings()} 
    ${this.renderBannerServicesInternalExternalSpray()} 
    ${this.renderBannerServicesProtectiveCoatings()}
    ${this.renderBannerServicesRenderingPlastering()}
    ${this.renderBannerServicesCladdingRestoration()}

    ${this.renderBannerSectorsFactoriesIndustrial()}
    ${this.renderBannerSectorsOffice()}
    ${this.renderBannerSectorsRetailShop()}
    ${this.renderBannerSectorsSchools()}
    `}>
      <div className="c-banner__container">
        <div className="c-banner__title" data-aos="zoom-in">

          <h2 className={`c-banner__title--sectors ${this.renderBannerSectorsTitle()}`}>
            Sectors
          </h2>
          <h2 className={`c-banner__title--services ${this.renderBannerServicesTitle()}`}>
            Services
          </h2>
          <h2 className={`c-banner__title--about ${this.renderBannerAboutTitle()}`}>
            About
          </h2>
          <h2 className={`c-banner__title--testimonials ${this.renderBannerTestimonialsTitle()}`}>Testimonials
          </h2>
          <h2 className={`c-banner__title--sectors ${this.renderBannerCareersTitle()}`}>
            Careers
          </h2>
          <h2 className={`c-banner__title--sectors ${this.renderBannerNewsTitle()}`}>
            News
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

          <h2 className={`c-banner__title--about ${this.renderBannerSectorsFactoriesIndustrialTitle()}`}> 
            Industrial
          </h2>
          <h2 className={`c-banner__title--about ${this.renderBannerSectorsOfficeTitle()}`}> 
            Office Decorating
          </h2>
          <h2 className={`c-banner__title--about ${this.renderBannerSectorsRetailShopTitle()}`}>
            Retail Refurbishment
          </h2>
          <h2 className={`c-banner__title--about ${this.renderBannerSectorsSchoolsTitle()}`}> 
            Schools
          </h2>
          <hr className="c-banner__title--line" />
        </div>
      </div>
    </div>
  }
}

export default withRouter(Banner)