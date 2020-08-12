import React from 'react'
import Logo from './images/BiotalentLogo.png'

function NavBar(){
  return(
    <div className="header">
      <div className="logo">
        <img src={Logo}/>
      </div>
      <div className="navbar">
            <button className="button"><a href="link to about us page">About Us</a></button>
            <button className="button"><a href="link to Opportunities page">Opportunities</a></button>


            <div className="dropdown">
              <button className="button">Projects</button>
              <div className="dropdown-content">
                <a href="#">Project 1</a>
                <a href="#">Project 2</a>
                <a href="#">Project 3</a>
                <a href="#">Project 4</a>
                <a href="#">Project 5</a>
                <a href="#">Project 6</a>
                <a href="#">Project 7</a>
                <a href="#">Project 8</a>
                <a href="#">Project 9</a>
                <a href="#">Project 10</a>
              </div>
            </div>
            <button className="button"><a href="link to biotalent page">BioTalent</a></button>
        </div>
      </div>
  )
}

export default NavBar
