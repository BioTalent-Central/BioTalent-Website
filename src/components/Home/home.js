import React from 'react';
import './home.css';
import Content from './content.js'
import Overview from './overview.js'
//import {Link} from 'react-router'

function home() {
  return (
    <div className="Home">

      <Overview/>
      <Content/>

    </div>
  )
}

export default home;
