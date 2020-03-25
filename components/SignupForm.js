import { Component } from 'react'

class SignupForm extends Component {
  render () {
    return <>
      <div className="c-signup">
        <form action="https://herokuapp.us19.list-manage.com/subscribe/post?u=a494df16f52fd1ec8d254d485&amp;id=1c365dac98" method="post" name="mc-embedded-subscribe-form" className="validate c-signup__form" target="_blank" noValidate>
          <div className="mc-field-group c-signup__form--field">
            <label htmlFor="mce-EMAIL" className="c-signup__form--field-label">
              Sign Up
            </label>
            <input type="email" name="EMAIL" className="email c-signup__form--field-input" placeholder="Your email...." required />
          </div>
          <div className="c-signup__form--submit">
            <input type="submit" defaultValue="Subscribe" name="subscribe" className="c-signup__form--submit-btn" />
          </div>
        </form>
      </div>
    </>
  }
}

export default SignupForm