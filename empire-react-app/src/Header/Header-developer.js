import React from "react";
//import { faSearch } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <Navbar type="dark" theme="dark" expand="md">
        <img src={require('./logo.jpg')}  style={{height:50 }}/>
        <NavbarBrand href="/">Empire Platform</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />
        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink active href="/">
                For Investors
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink active href="/underwriter/home">
                For Underwriters
              </NavLink>
            </NavItem>
            <NavItem style={{position: "absolute",right:20}}>
            <NavLink active href="/developer/add">
                Log-in
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}