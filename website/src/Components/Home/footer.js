import React from 'react'
import Logo from './images/BiotalentLogo.png'

function Footer(){
  return(
    <div className="footer">
      <h2>Contact Us</h2>
      <p>(123)-456-7890</p>
      <p>122 Daly Ave. <br/> Ottawa, ON</p>
      <p>biotalentcentral@gmail.com</p>
      <div className="bottomLogo">
        <img src={Logo}/>
      </div>
    </div>
  )
}

export default Footer
