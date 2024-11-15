import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div>
      <div className="main-panel">
  <div className="container">
    <div className="width-33 logo">Port <span className="span-col">folio</span>
    </div>
    <div className="width-66">
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education">Education/Experiences</Link>
        <Link to="/about">About me</Link>
      </nav>
    </div>
  </div>
  {/*----ABOUT US SECTION----*/}
  <div className="main-section bg-lightgrey">
    <div className="container">
      <div className="width-50">
        <img src="assets/images/adi.jpeg" alt="about-img" />
      </div>
      <div className="width-50">
        <div className="about-us">
          <h2 className="heading-text">About Me</h2>
          <h3>I am available for Frontend Development Project</h3>
          <p>Hi, I am Aditya Shekhawat, From Jaipur, Rajasthan, India. I have Completed my Bsc Computer Science from Sikkim Alpine University. </p>
          <div className="width-50 mt-20">
            <table cellSpacing={8} cellPadding={8}>
              <tbody><tr>
                  <th>Name:</th>
                  <td>Aditya Shekhawat</td>
                </tr>
                <tr>
                  <th>Email:</th>
                  <td> Adityasinghshekhawat25@gmail.com</td>
                </tr>
                <tr>
                  <th>Birthday:</th>
                  <td> 09 July, 1997</td>
                </tr>
                <tr>
                  <th>Study:</th>
                  <td> Sikkim Alpine University</td>
                </tr>
              </tbody></table>
          </div>
          <div className="width-50 mt-20">
            <table cellSpacing={8} cellPadding={8}>
              <tbody><tr>
                  <th>Phone:</th>
                  <td>(+91) 7877739175</td>
                </tr>
                <tr>
                  <th>City:</th>
                  <td>Jaipur</td>
                </tr>
              </tbody></table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default About

