import React from 'react'
import { Link } from 'react-router-dom'
const Dashboard = () => {
  return (
    <div>
      
  <div className="main-panel">
    <div className="container">
      <div className="width-33 logo">Port <span className="span-col">folio</span>
      </div>
      <div className="width-66">
        <nav>
          <Link to="/">
            <span className="span-col">Home</span>
          </Link>
          <Link to="/projects">Projects</Link>
          <Link to="/education">Education/Experiences</Link>
          <Link to="/about">About me</Link>
        </nav>
      </div>
    </div>
    {/*----MAIN BANNERR----*/}
    <div className="container ">
      <div className="width-50">
        <div className="banner-section">
          <span className="span-col">Welcome To Aditya Shekhawat Portfolio</span>
          <h1>Aditya <span className="span-col">Shekhawat</span>
          </h1>
          <h2>- I'm a passionate Frontend Developer from Jaipur, Rajasthan, India.</h2>
          <Link to="https://www.linkedin.com/in/aditya-shekhawat-0140481b8/">
            <i className="fa fa-linkedin" />
          </Link>
          <Link to="https://www.instagram.com/goodbye.mushroom/">
            <i className="fa fa-instagram" />
          </Link>
          <Link to="https://github.com/Gudfornothing">
            <i className="fa fa-github" />
          </Link>
        </div>
      </div>
      <div className="width-50" >
        <img src="assets/images/aditya.jpeg" />
      </div>
    </div>
  </div>
  {/*----SKILL SECTION----*/}
  <div className="main-section">
    <div className="container">
      <h2 className="heading-text">My Skills</h2>
      <div className="width-50">
        <div className="skill">
          <b>HTML</b>
          <span>80%</span>
          <div>
            <span style={{width: '80%'}} />
          </div>
        </div>
        <div className="skill">
          <b>CSS</b>
          <span>70%</span>
          <div>
            <span style={{width: '70%'}} />
          </div>
        </div>
        <div className="skill">
          <b>JavaScript</b>
          <span>70%</span>
          <div>
            <span style={{width: '70%'}} />
          </div>
        </div>
        <div className="skill">
          <b>React js</b>
          <span>65%</span>
          <div>
            <span style={{width: '65%'}} />
          </div>
        </div>
      </div>
      <div className="width-50">
        <div className="width-50">
        <div role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} style={{width: '65%'}}>React-65</div>
</div>
<div className="width-50">
  <div role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>HTML-80</div>
</div>
<div className="width-50">
  <div role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} style={{width: '65%'}}>CSS-70</div>
</div>
<div className="width-50">
  <div role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>JavaScript-70</div>
</div>
      </div>
      </div>
    

    </div>
    </div>
  )
}

export default Dashboard
