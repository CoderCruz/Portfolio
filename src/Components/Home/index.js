import React from "react"
import "./index.css"

import myPhoto from "../../Photos/personalphoto.png"

const Home = () => {
  return(
    <div className="Home-container">
      <div className="Home-baby-container baby-one">
        <div className="Home-my-photo-container">
          <img className="Home-my-photo" src ={myPhoto} alt="Jose Cruz" />
        </div>
        <div className="Home-me-description">
            <h2 className="Home-me-title">Full Stack Developer</h2>
            <p className="Home-me-synopsis">
              "My passion for coding comes from doing the unthinkable"
            </p>
        </div>
      </div>
      <div className="Home-baby-container baby-two">
        <div className="Home-summary">
          <h3 className="Home-summary-title">About Me</h3>
          <p className="Home-summary-text">With a charismatic personality, coming from a customer service and I.T. background, I'm driven by understanding people and analyzing what a customer needs. On the other end, breaking down big problems and understanding the task on a microscopic level is something I have emphasized throughout my life. These skills paired with my programming capability make me a powerful asset to any customer-facing team; I can understand what your clients need and execute it in an aesthetically pleasing manner.</p>
        </div>
        <div className="Home-skills">
          <h3 className="Home-skills-title">Skills</h3>
          <div className="Home-skills-section-container">
            <div className="Home-skills-section">

            </div>
            <div className="Home-skills-section">
              HTML <i class="fas fa-check"></i>
            </div>
            <div className="Home-skills-section">
              CSS <i class="fas fa-check"></i>
            </div>
            <div className="Home-skills-section">
              JAVASCRIPT <i class="fas fa-check"></i>
            </div>
            <div className="Home-skills-section">
              REACT <i class="fas fa-check"></i>
            </div>
            <div className="Home-skills-section">
              EXPRESS <i class="fas fa-check"></i>
            </div>
            <div className="Home-skills-section">
              RUBY <i class="fas fa-check"></i>
            </div>
            <div className="Home-skills-section">
              RUBY ON RAILS <i class="fas fa-check"></i>
            </div>
            <div className="Home-skills-section">
              SQL <i class="fas fa-check"></i>
            </div>
            <div className="Home-skills-section">
              SEQUELIZE <i class="fas fa-check"></i>
            </div>
            <div className="Home-skills-section">
              POSTGRESQL <i class="fas fa-check"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
