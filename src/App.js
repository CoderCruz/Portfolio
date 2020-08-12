import React, { Component } from 'react';

import Nav from "./Components/Nav/index.js"
import Home from "./Components/Home/index.js"
import ProjectCardList from "./Components/ProjectCardList/index.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <ProjectCardList />
      </div>
    );
  }
}

export default App;
