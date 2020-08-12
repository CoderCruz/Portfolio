import React from "react"
import "./index.css"

const Nav = () => {
  return(
    <div className="Nav-container">
      <div className="Nav-logo Nav-solo">
        CruzCode
      </div>
      <div className="Nav-links-container Nav-solo">
        <a target="_blank" className="Nav-links" href="https://github.com/CoderCruz" rel="noopener noreferrer"><i className="fab fa-github Footer-links"></i></a>
        <a target="_blank" className="Nav-links" href="https://www.linkedin.com/in/jcruz02/" rel="noopener noreferrer"><i className="fab fa-linkedin-in Footer-links"></i></a>
        <a target="_blank" className="Nav-links" href="mailto: cruzjosework@gmail.com" rel="noopener noreferrer"><i className="far fa-envelope Footer-links"></i></a>
      </div>
      
    </div>
  )
}


export default Nav
