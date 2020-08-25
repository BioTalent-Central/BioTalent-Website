import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './nav.css'
import './skeleton.css'
import'./normalize.css'
import './footer.css'


import HomeNav from "./components/Home/navbar2"


import Project from "./components/Project"
import ProjectOne from "./components/projects/ProjectOne"
import ProjectTwo from "./components/projects/ProjectTwo"
import ProjectThree from "./components/projects/ProjectThree"
import ProjectFour from "./components/projects/ProjectFour"
import ProjectFive from "./components/projects/ProjectFive"
import ProjectSix from "./components/projects/ProjectSix"
import ProjectSeven from "./components/projects/ProjectSeven"
import ProjectEight from "./components/projects/ProjectEight"
import ProjectTen from "./components/projects/ProjectTen"

import aboutus from './components/About/aboutus';
import opportunities from './components/Opportunities/opportunities';
import home from './components/Home/home';
import BioTalent from './components/BioTalent page/BioTalentPage'
import Footer from './components/Home/footer'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomeNav />
        <Switch>
            <Redirect from="/" exact to="/home"/>
            <Route path="/home" component={home}/>
            <Route path="/project" component={Project}/>
            <Route path="/about" component={aboutus} />
            <Route path="/opportunities" component={opportunities} />
            <Route path="/biotalent" component={BioTalent}/>
            <Route path="/project1" component={ProjectOne}/>
            <Route path="/project2" component={ProjectTwo}/>
            <Route path="/project3" component={ProjectThree}/>
            <Route path="/project4" component={ProjectFour}/>
            <Route path="/project5" component={ProjectFive}/>
            <Route path="/project6" component={ProjectSix}/>
            <Route path="/project7" component={ProjectSeven}/>
            <Route path="/project8" component={ProjectEight}/>
            <Route path="/project10" component={ProjectTen}/>
          </Switch>
        <Footer/>
    </BrowserRouter>

    </div>
  )
}

export default App;
