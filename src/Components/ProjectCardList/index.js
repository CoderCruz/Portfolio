import React, { Component } from "react"

import ProjectCard from "../ProjectCard/index.js"
import "./index.css"

import data from "../../Data/data.js"

class ProjectCardList extends Component{
  constructor() {
    super()

    this.state = {
      properties: data.properties,
      property: data.properties[0]
    }
    console.log(this.state.properties);
  }

nextProperty = () => {
  const newIndex = this.state.property.index+1;
  this.setState({
    property: data.properties[newIndex]
  })
}

prevProperty = () => {
  const newIndex = this.state.property.index-1;
  this.setState({
    property: data.properties[newIndex]
  })
}



  render() {
    const { properties, property } = this.state;
    return(
        <div className="ProjectCard-parent">
          <div className="button-container">
            <button className="buttons"
              onClick={() => this.prevProperty()}
              disabled={property.index === 0}>
              Prev
            </button>

           <button className="buttons"
             onClick={() => this.nextProperty()}
             disabled={property.index === data.properties.length-1}>
             Next
           </button>
        </div>

       <div className="page">
           <section>
               <h1>Personal Projects</h1>
           </section>

           <div className="col">
             <div className={`cards-slider active-slide-${property.index}`}>
               <div className="cards-slider-wrapper" style={{
                 'transform': `translateX(-${property.index*(100/properties.length)}%)`
               }}>
                 {
                   properties.map(property => <ProjectCard key={property._id} property={property} />)
                 }
               </div>
             </div>
           </div>

       </div>
     </div>
    )
  }
}


export default ProjectCardList
