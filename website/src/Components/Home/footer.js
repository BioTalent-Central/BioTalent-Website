import React from 'react'
import Logo from './images/BiotalentLogo.png'
import {NavLink} from 'shards-react'


export default class Footer extends React.Component{
  render(){
    return(
      <div className="footer">
        <div className='container'>
          <div className="row">
            <div className="five columns">
              <h6>Contact Us</h6>
              <p>(613) 562-5741</p>
              <p>3101 - 55 Laurier Avenue East,<br/>Ottawa ON K1N 6N5 Canada</p>
              <p>biotalentcentral@gmail.com</p>
            </div>
            <div className="three columns">
              <h6>Learn More</h6>
              <NavLink active href="/about">About Us</NavLink>
              <NavLink active href="/biotalent">BioTalent Canada</NavLink>
            </div>
            <div className="four columns">
              <h6>Get Involved</h6>
              <NavLink active href="/opportunities">Opportunities</NavLink>
            </div>
          </div>
          <div>
            <div className="twelve columns">
              <img src={Logo} alt="logo"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
