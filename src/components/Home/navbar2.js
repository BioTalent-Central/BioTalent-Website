import React from 'react'
import Logo from './images/uOBGlogo.png'

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse
} from "shards-react"


export default class HomeNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {
    return (
      <div className="header">
        <Navbar expand="md">
          <NavbarBrand href="/home"><img src={Logo} alt="logo"/></NavbarBrand>
          <NavbarToggler onHover={this.toggleNavbar} />

          <Collapse open={this.state.collapseOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink active href="/home" className="nav_link">
                  <h4>Home</h4>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active href="/about" className="nav_link">
                  <h4>About Us</h4>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active href="/opportunities" className="nav_link">
                  <h4>Opportunities</h4>
                </NavLink>
              </NavItem>
              <NavItem>
                <Dropdown
                  open={this.state.dropdownOpen}
                  toggle={this.toggleDropdown}
                >

                  <NavLink active href="/project" className="nav_link">
                    <h4>Projects</h4>
                  </NavLink>
                  <DropdownToggle split className="arrow">
                  </DropdownToggle>

                  <DropdownMenu className="drop">
                    <NavLink active href="/project1"><DropdownItem className="dItem">COVID ENG</DropdownItem></NavLink>
                    <NavLink actice href="/project2"><DropdownItem className="dItem">COVID MED</DropdownItem></NavLink>
                    <NavLink active href="/project3"><DropdownItem className="dItem">Microbrewery & Distillery</DropdownItem></NavLink>
                    <NavLink active href="/project4"><DropdownItem className="dItem">Gems of the LNS</DropdownItem></NavLink>
                    <NavLink active href="/project5"><DropdownItem className="dItem">BioDigital Policy Horizons</DropdownItem></NavLink>
                    <NavLink active href="/project6"><DropdownItem className="dItem">BioMakerSpace</DropdownItem></NavLink>
                    <NavLink active href="/project7"><DropdownItem className="dItem">3D Bioprinting</DropdownItem></NavLink>
                    <NavLink active href="/project8"><DropdownItem className="dItem">BioComputing</DropdownItem></NavLink>

                    <NavLink active href="/project10"><DropdownItem className="dItem">BioEnvo</DropdownItem></NavLink>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <NavLink active href="/biotalent" className="nav_link">
                  <h4>BioTalent</h4>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

    );
  }
}
