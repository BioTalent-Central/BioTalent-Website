import React from 'react'
import Logo from './images/BiotalentLogo.png'

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
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
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
        <Navbar type="dark" expand="md">
          <NavbarBrand href="/home"><img src={Logo}/></NavbarBrand>
          <NavbarToggler onHover={this.toggleNavbar} />

          <Collapse open={this.state.collapseOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink active href="/home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active href="/about">
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active href="/opportunities">
                  Opportunities
                </NavLink>
              </NavItem>
              <Dropdown
                open={this.state.dropdownOpen}
                toggle={this.toggleDropdown}
              >
                <DropdownToggle split>
                  <NavLink active href="/project">Projects</NavLink>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem><NavLink active href="/project1">Project 1</NavLink></DropdownItem>
                  <DropdownItem><NavLink actice href="/project2">Project 2</NavLink></DropdownItem>
                  <DropdownItem><NavLink active href="/project3">Project 3</NavLink></DropdownItem>
                  <DropdownItem><NavLink active href="/project4">Project 4</NavLink></DropdownItem>
                  <DropdownItem><NavLink active href="/project5">Project 5</NavLink></DropdownItem>
                  <DropdownItem><NavLink active href="/project6">Project 6</NavLink></DropdownItem>
                  <DropdownItem><NavLink active href="/project7">Project 7</NavLink></DropdownItem>
                  <DropdownItem><NavLink active href="/project8">Project 8</NavLink></DropdownItem>
                  <DropdownItem><NavLink active href="/project9">Project 9</NavLink></DropdownItem>
                  <DropdownItem><NavLink active href="/project10">Project 10</NavLink></DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavItem>
                <NavLink active href="/biotalent">
                  BioTalent
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

    )
  }
}
