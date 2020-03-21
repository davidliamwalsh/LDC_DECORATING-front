import { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

class KeyContactsGridTest extends Component {

  constructor (props) {
    super(props)

    this.USERS_QUERY = gql`
      query users {
        users  {
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
    const { userSize } = this.props

    return <Query query={this.USERS_QUERY}>
      {({ loading, data }) => {
        if (loading) {
          return (
            <div className="c-loader__container">
              <p>loading....</p>
            </div>
          )
        } else {
          return <>
            <div className="o-grid-3-2-1">
              {data.users.slice(0, userSize).map((user, index) => {
                return <div className="c-about__grid_card" key={index}>
                  <div className="c-about__grid_card--hero">
                    <img className="c-about__grid_card--hero-image" src={`${process.env.BACKEND_URL}${user.previewImage}`} />
                  </div>
                  <div className="c-about__grid_card--head">
                    <h4 className="c-about__grid_card--head-main">{user.title}</h4>
                    <h4 className="c-about__grid_card--head-inset">{user.subtitle}</h4>
                    <hr className="c-about__grid_card--head-line" />
                  </div>
                  <div className="c-about__grid_card--text">
                    <p>{user.body}</p>
                  </div>
                  <div className="c-about__grid_card--links">
                    <Link href=''>
                      <a><FontAwesomeIcon icon={faAt} /></a>
                    </Link>
                    <Link href='mailto:'>
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

export default KeyContactsGridTest