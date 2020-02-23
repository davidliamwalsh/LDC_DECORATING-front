import { Component } from 'react'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import withData from '../lib/withData'

import Layout from '../components/Layout'
import TestimonialCard from '../components/TestimonialCard'

class Index extends Component {

  constructor (props) {
    super(props)

    this.TESTIMONIALS_QUERY = gql`
      query testimonials {
       testimonials {
         id
         slug
         image
         previewImage
         title
         body
         createdAt
       }
     }
    `
  }

  render () {
    return <Query query={this.TESTIMONIALS_QUERY}>
      {({ loading, data }) => {
        if (loading) {
          return <Layout {...this.props}>
            <p>Loading...</p>
          </Layout>
        } else {
          return <Layout {...this.props}>
            <div className='row'>
              {data.testimonials.map((testimonial, index) => {
                return <TestimonialCard key={index} testimonial={testimonial} />
              })}
            </div>
          </Layout>
        }
      }}
    </Query>
  }
}

export default withData(Index)