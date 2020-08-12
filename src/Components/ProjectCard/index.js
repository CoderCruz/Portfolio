import React from "react"

import "./index.css"

const ProjectCard = ({ property }) => {
  const {index, link, image, name, skills, description, _id} = property
  console.log(property);
  return(

    <div id={`card-${index}`} className="card">
      <a target="_blank" href={link} rel="noopener noreferrer"><img className="ProjectCard-image" src={image} alt={name}/></a>
      <div className="details">
        <p className="ProjectCard-info">
          <h3>{name}</h3><br />
          {description}<br/>
        </p>
        <h5 className="ProjectCard-skills">{skills}</h5>
      </div>
    </div>

  )
}

export default ProjectCard
