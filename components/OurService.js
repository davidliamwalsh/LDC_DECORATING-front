import { Component } from 'react'

class OurService extends Component {
  render () {
    return <>
      <div className="c-ourService">
        <div className="c-ourService__container">
          <div className="c-ourService__head">
            <h4>Our Service</h4>
          </div>
          <div className="c-ourService__line">
            <hr />
          </div>
          <div className="c-ourService__main">
            <div className="c-ourService__main--item">
              <div className="c-ourService__main--item-image">
                <i class="fas fa-check-circle"></i>
              </div>
              <div className="c-ourService__main--item-main">
                <h4 div className="c-ourService__main--item-main__title">title</h4>
                <p div className="c-ourService__main--item-main__description">Our flexible approach means we adapt to your requirements, whether that’s working out of hours or on weekend, whatever it takes to get the job done. We firmly believe that in doing our job, our aim is not interfere with you doing yours.</p>
              </div>
            </div>
            <div className="c-ourService__main--item">
              <div className="c-ourService__main--item-image">
                <i class="fas fa-check-circle"></i>
              </div>
              <div className="c-ourService__main--item-main">
                <h4 div className="c-ourService__main--item-main__title">title</h4>
                <p div className="c-ourService__main--item-main__description">Full range of commercial painting services for both internal and external projects. From the use of specialist and protective paints, to cladding restoration, wide vinyl hanging, render and plastering.</p>
              </div>
            </div>
            <div className="c-ourService__main--item">
              <div className="c-ourService__main--item-image">
                <i class="fas fa-check-circle"></i>
              </div>
              <div className="c-ourService__main--item-main">
                <h4 div className="c-ourService__main--item-main__title">title</h4>
                <p div className="c-ourService__main--item-main__description">Greens is the decorating contractor of choice for many large organisations, councils and main contractors with over 30 years proven history for exemplary levels of workmanship and service.</p>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  }
}

export default OurService