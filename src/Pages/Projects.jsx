import React from 'react'
import { Link } from 'react-router-dom'
const Projects = () => {
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
  {/*----PORTFOLIO SECTION----*/}
  <div className="main-section">
    <div className="container">
      <h2 className="heading-text">My Projects</h2>
      <div className="gallery">
        <div className="width-33">
          <img src="../../public/assets/images/blog.png" />
        </div>
        <div className="width-33">
          <img src="assets/images/bmi.png" />
        </div>
        <div className="width-33">
          <img src="assets/images/calorie.png" />
        </div>
        <div className="width-33">
          <img src="assets/images/zilo.png" />
        </div>
        <div className="width-33">
          <img src="assets/images/game.png" />
        </div>
        <div className="width-33">
          <img src="assets/images/currency.png" />
        </div>
        <div className="width-33">
          <img src="assets/images/zilo1.png" />
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Projects
