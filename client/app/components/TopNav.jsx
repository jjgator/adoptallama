import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import AddButton from './AddButton.jsx';

const TopNav = (props) => (
    <Navbar onSelect={props.onSelect}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='/'>Adopt-A-Llama</a>
        </Navbar.Brand>
      </Navbar.Header>
      {props.isLoggedIn === false ? 
        <Nav pullRight>
          <NavItem eventKey={'login'} href='#'>Login</NavItem>
        </Nav> : 
        <Nav pullRight>
          <NavItem eventKey={'profile'} href='#'>Edit Profile</NavItem>
        </Nav>
      }
    </Navbar>
);

export default TopNav;

