import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import './App.css';

import NavBar from "./components/NavBar"
import Project from "./components/Project"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      
        <NavBar />

          <Switch>
            <Route path="/project" component={Project}/>
          </Switch>
      
      </div>
    </BrowserRouter>
  )
}

export default App;
