import React, { Component } from 'react';

import Nav from "./Components/Nav/index.js"
import Footer from "./Components/Footer/index.js"
import Home from "./Components/Home/index.js"
import ProjectCardList from "./Components/ProjectCardList/index.js"

import {BrowserRouter, Route, Switch} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Nav/>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/projects" component={ProjectCardList}/>
            </Switch>
            <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
