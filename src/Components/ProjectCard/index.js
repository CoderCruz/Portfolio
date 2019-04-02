import React from "react"

import "./index.css"

const ProjectCard = ({ property }) => {
  const {index, image, name, skills, description, _id} = property
  console.log(property);
  return(
    <div id={`card-${index}`} className="card">
      <img className="ProjectCard-image"  src={image} alt={name}/>
      <div className="details">
        <p className="ProjectCard-info">
          {name}<br />
          {description}<br/>
        </p>
        <h5 className="ProjectCard-skills">{skills}</h5>
      </div>
    </div>
  )
}

export default ProjectCard
