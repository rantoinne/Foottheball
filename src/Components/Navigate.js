import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navigate extends Component {
  render(){
    return(
      <div className="fixedTop">

          <Navbar id="NavItem">
          <NavItem eventKey={1} href="/home" id="bells">TRENDING</NavItem>
          <NavItem eventKey={2} href="/home" id="bells">LIVE</NavItem>
          <NavItem eventKey={3} href="/home" id="bells">FANZONE</NavItem>
          <NavItem eventKey={4} href="/home" id="bells">LETS PLAY</NavItem>


        </Navbar>

      </div>
    );
  }
}
export default Navigate;
