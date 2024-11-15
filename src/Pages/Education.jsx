import React from 'react'
import { Link } from 'react-router-dom'
const Education = () => {
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
  {/*----EXPERIENCE SECTION----*/}
  <div className="main-section bg-lightgrey">
    <div className="container">
      <div className="edu-exp">
        <h2 className="heading-text">Education</h2>
        <div className="experience-list">
          <div className="experience-content">
            <h2>Sikkim Alpine University </h2>
            <h3>2021-2024</h3>
            <p>Bachelor in Computer Science</p>
          </div>
        </div>
        <div className="experience-list">
          <div className="experience-content">
            <h2>Shri Bhawani Niketan Polytechnic College</h2>
            <h3>2014-2020</h3>
            <p>Diploma in Civil Engineering</p>
          </div>
        </div>
        <div className="experience-list">
          <div className="experience-content">
            <h2>Shri Bhawani Niketan Public School</h2>
            <h3>2005-2008</h3>
            <p>Secondary Education</p>
          </div>
        </div>
      </div>
      <div className="edu-exp">
        <h2 className="heading-text">Experience</h2>
        <div className="experience-list">
          <div className="experience-content">
            <h2>Unified Mentor Pvt. limited</h2>
            <h3>Septmeber 2024-Current</h3>
            <p>FontEnd Developer Intern</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Education
