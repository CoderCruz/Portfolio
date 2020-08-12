import React from "react"
import "./index.css"

import myPhoto from "../../Photos/personalphoto.png"

const Home = () => {
  return(
    <div className="Home-container">
          <div className="photo-container">
            <img className="Home-my-photo" src ={myPhoto} alt="Jose Cruz" />
          </div>
          <div className="Home-info-container">
            <div className="Home-me-description">
                <p className="Home-me-synopsis">
                  "My passion for programming is fueled by solving real life issues"
                </p>
                <h2 className="Home-me-title"> Jose Cruz | Full Stack Developer</h2>
                <h2 className="Home-summary-title">About Me</h2>
                <p className="Home-summary-text">
                    My background in programming, teaching, retail, and I.T support has led me to become a compassionate, dependable, and cheerful teammate. I’ve worked extensively with JavaScript, Ruby, and Python applications adopting agile methodologies, and pair-programming as a foundation for scalable defect-free code.
                </p>
                <p className="Home-summary-text">
                  Skills: Javascript, HTML5, CSS3, React.js, Express.js, Node.js, Ruby, Ruby on Rails, RSpec, SQL, PostgreSQL, Sequelize, RESTful API, Java, Python, Redux, Angular 9.
                </p>
            </div>
          </div>
    </div>
  )
}

export default Home
