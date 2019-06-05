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
          HOME
        </NavLink>
        <NavLink to="/projects" className="Nav-links">
          PROJECTS
        </NavLink>
      </div>
    </div>
  )
}


export default Nav
