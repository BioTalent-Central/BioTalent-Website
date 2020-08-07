import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import './App.css';
import AboutUs from "./components/About/aboutus"

import NavBar from "./components/NavBar"
import Project from "./components/Project"
import ProjectOne from "./components/projects/ProjectOne"
import ProjectTwo from "./components/projects/ProjectTwo"
import ProjectThree from "./components/projects/ProjectThree"
import ProjectFour from "./components/projects/ProjectFour"
import ProjectFive from "./components/projects/ProjectFive"
import ProjectSix from "./components/projects/ProjectSix"
import ProjectSeven from "./components/projects/ProjectSeven"
import ProjectEight from "./components/projects/ProjectEight"
import ProjectNine from "./components/projects/ProjectNine"
import ProjectTen from "./components/projects/ProjectTen"


function App() {
  return (
    <div className="App">
      <BrowserRouter>     
        <NavBar />
        <Switch>
            <Route path="/project" component={Project}/>
            // <Route path="/about" component={Project}/>
            <Route path="/project1" component={ProjectOne}/>
            <Route path="/project2" component={ProjectTwo}/>
            <Route path="/project3" component={ProjectThree}/>
            <Route path="/project4" component={ProjectFour}/>
            <Route path="/project5" component={ProjectFive}/>
            <Route path="/project6" component={ProjectSix}/>
            <Route path="/project7" component={ProjectSeven}/>
            <Route path="/project8" component={ProjectEight}/>
            <Route path="/project9" component={ProjectNine}/>
            <Route path="/project10" component={ProjectTen}/>
          </Switch>
    </BrowserRouter>
  )
    </div>
  )
}

export default App;
