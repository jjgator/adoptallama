import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

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
        {props.page === "home" ? 
          <NavItem >
            <Link to="/view"><span>View/Edit Profile</span></Link>
          </NavItem> :
          <NavItem eventKey={'logout'} href='/'>Logout</NavItem>
        }  
        </Nav>
      }
    </Navbar>
);

export default TopNav;

