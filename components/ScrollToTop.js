import { Component } from 'react'

class ScrollToTop extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handeleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handeleScroll);
  }

  handeleScroll() {
    if (window.pageYOffset > 500) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }

  topFunction(){
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  render () {
    return <>
      <button onClick={this.topFunction} className="c-scroll__button" id="myBtn">Top</button>
    </>
  }
}

export default ScrollToTop