import React from 'react'
import Logo from './images/BiotalentLogo.png'
import {NavLink} from 'shards-react'


export default class Footer extends React.Component{
  render(){
    return(
      <div className="footer">
        <div className='container'>
          <div className="row">
            <div className="four columns">
              <h4>Contact Us</h4>
              <p>(123)-456-7890</p>
              <p>122 Daly Ave. <br/> Ottawa, ON</p>
              <p>biotalentcentral@gmail.com</p>
            </div>
            <div className="four columns">
              <h4>Learn More</h4>
              <NavLink active href="/about">About Us</NavLink>
              <NavLink active href="/biotalent">BioTalent Canada</NavLink>
            </div>
            <div className="four columns">
              <h4>Get Involved</h4>
              <NavLink active href="/opportunities">Opportunities</NavLink>
            </div>
          </div>
          <div>
            <div className="twelve columns">
              <img src={Logo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
