import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
  render(){
    return(
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand id="see">
          FootTheBall
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem href="/home" id="behave">Login</NavItem>
      </Nav>

      <Nav>
        <NavItem href="/home" id="creave">Signup</NavItem>
      </Nav>
    </Navbar>
    );
  }
}
export default Header;
