import React from 'react';
import './home.css';
import Content from './content.js'
import Footer from './footer.js'
import HomeSlideShow from './home-slideshow.js'
import Overview from './overview.js'
//import {Link} from 'react-router'

function home() {
  return (
    <div className="Home">

      <HomeSlideShow/>
      <Overview/>
      <Content/>
      <Footer/>

    </div>
  )
}

export default home;
