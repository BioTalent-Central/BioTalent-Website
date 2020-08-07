import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import './App.css';

import NavBar from "./Components/NavBar"
import Project from "./Components/Project"
import ProjectOne from "./Components/projects/ProjectOne"
import ProjectTwo from "./Components/projects/ProjectTwo"
import ProjectThree from "./Components/projects/ProjectThree"
import ProjectFour from "./Components/projects/ProjectFour"
import ProjectFive from "./Components/projects/ProjectFive"
import ProjectSix from "./Components/projects/ProjectSix"
import ProjectSeven from "./Components/projects/ProjectSeven"
import ProjectEight from "./Components/projects/ProjectEight"
import ProjectNine from "./Components/projects/ProjectNine"
import ProjectTen from "./Components/projects/ProjectTen"
import aboutus from './Components/About/aboutus';
import opportunities from './Components/Opportunities/opportunities';


function App() {
  return (
    <div className="App">
      <BrowserRouter>     
        <NavBar />
        <Switch>
            <Route path="/project" component={Project}/>
            <Route path="/about" component={aboutus} />
            <Route path="opportunities" component={opportunities}/>
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
