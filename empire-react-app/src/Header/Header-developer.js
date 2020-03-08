import React from "react";
//import { faSearch } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { Link } from 'react-router-dom';
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
} from "shards-react";


export default class NavExample extends React.Component {
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
      <Navbar type="dark" expand="md" style={{color: "white", backgroundColor: "#1F1F1B"}}>
        <img src={require('./logo.jpg')}  style={{height:50 }}/>
        <NavbarBrand href="/" style={{fontSize: 24}}>Empire Platform</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink active href="/developer/home">
                For Investor
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink active href="/underwriter/home">
                For Underwriter
              </NavLink>
            </NavItem>

            <NavItem style={{position: "absolute",right:20}}>
            <NavLink active href="/user/add">
                Log-in
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        
      </Navbar>

        
    );
  }
}