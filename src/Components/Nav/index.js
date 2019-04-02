import React from "react"
import "./index.css"

import { NavLink } from "react-router-dom"

const Nav = () => {
  return(
    <div className="Nav-container">
      <div className="Nav-logo">
        CruzCode
      </div>
      <div className="Nav-navbar-container">
        <NavLink to="/" className="Nav-links">
          Home
        </NavLink>
        <NavLink to="/projects" className="Nav-links">
          Projects
        </NavLink>
        <NavLink to="contact" className="Nav-links">
          Contact
        </NavLink>
      </div>
    </div>
  )
}


export default Nav
