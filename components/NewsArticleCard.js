import { Component } from 'react'

class NewsArticleCard extends Component {

  render () {
    const { newsArticle } = this.props

    return <div className='col-xs-12 col-md-6 col-lg-3' style={{alignItems: 'stretch', display: 'flex'}}>
      <div className='card c-card'>
        <div className='card-body'>
          <h5 className='card-title'>{newsArticle.title}</h5>
        </div>
      </div>
    </div>
  }
}

export default NewsArticleCard