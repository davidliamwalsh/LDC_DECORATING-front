import { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Facebook } from 'react-content-loader'
import Link from 'next/link'

class Careers extends Component {

  constructor (props) {
    super(props)

    this.CAREERSITEMS_QUERY = gql`
      query careersItems {
        careersItems  {
          slug
          id
          title
          jobDescription
          jobType
          experience
          location
          driversLicense
          language
        }
      }
    `
  }
  
  render () {
    const MyFacebookLoader = () => <Facebook />

    return <Query query={this.CAREERSITEMS_QUERY}>
      {({ loading, data }) => {
        if (loading) {
          return (
            <div className="c-loader__container">
              <MyFacebookLoader />
            </div>
          )
        } else {
          return <div className="c-careers">
            {data.careersItems.map((careersItem, index) => {
              return (
                <li className="c-careers__item" key={index} data-aos="fade">
                  <div className="c-careers__item--inner">
                    <h5 className="c-careers__item--inner-title">{careersItem.title}</h5>
                    <h5 className="c-careers__item--inner-body">{careersItem.jobDescription}</h5>
                    <h5 className="c-careers__item--inner-list">Job Type: {careersItem.jobType}</h5>
                    <li className="c-careers__item--inner-list">Required Experience: {careersItem.experience}</li>
                    <li className="c-careers__item--inner-list">Location: {careersItem.location}</li>
                    <li className="c-careers__item--inner-list">Required Licence or Certification: {careersItem.driversLicense}</li>
                    <li className="c-careers__item--inner-list">Required Language: {careersItem.language}</li>
                    <li className="c-careers__item--inner-list">Please email CV and cover letter to 
                    <Link href={`mailto:info@ldcdecoratingcontractors.co.uk`}>
                      <a>info@ldcdecoratingcontractors.co.uk</a>
                    </Link>
                    </li>
                  </div>
                </li>
              )
            })}
          </div>
        }
      }}
    </Query>
  }
}

export default Careers