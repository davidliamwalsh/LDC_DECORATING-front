import { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Facebook } from 'react-content-loader'
import Link from 'next/link'

class AboutPainterDecoratorsGrid extends Component {

  constructor (props) {
    super(props)

    this.DECORATORS_QUERY = gql`
      query decorators {
        decorators  {
          slug
          image
          previewImage
          id
          title
          subtitle
          email
          linkedin
          body
        }
      }
    `
  }

  render () {
    const { decoratorSize } = this.props
    const MyFacebookLoader = () => <Facebook />

    return <Query query={this.DECORATORS_QUERY}>
      {({ loading, data }) => {
        if (loading) {
          return (
            <div className="c-loader__container">
              <MyFacebookLoader />
            </div>
          )
        } else {
          return <>
            <div className="o-grid-3-2-1">
              {data.decorators.slice(0, decoratorSize).map((decorator, index) => {
                return <div className="c-about__grid_card" key={index}>
                  <div className="c-about__grid_card--hero">
                    <img className="c-about__grid_card--hero-image" src={`${process.env.BACKEND_URL}${decorator.previewImage}`} />
                  </div>
                  <div className="c-about__grid_card--head">
                    <h4 className="c-about__grid_card--head-main">{decorator.title}</h4>
                    <h4 className="c-about__grid_card--head-inset">{decorator.subtitle}</h4>
                    <hr className="c-about__grid_card--head-line" />
                  </div>
                  <div className="c-about__grid_card--text">
                    <p>{decorator.body}</p>
                  </div>
                  <div className="c-about__grid_card--links">
                    <Link href={`mailto:${decorator.email}`}>
                      <a><FontAwesomeIcon icon={faAt} /></a>
                    </Link>
                    <Link href={`${decorator.linkedin}`}>
                      <a><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </Link>
                  </div>
                </div>
              })}
            </div>
          </>
        }
      }}
    </Query>
  }
}

export default AboutPainterDecoratorsGrid