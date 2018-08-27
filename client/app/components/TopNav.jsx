import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import AddButton from './AddButton.jsx';

const TopNav = () => (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='/'>Adopt-A-Llama</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem  eventKey={'login'} href='#'>Profile</NavItem>
      </Nav>
    </Navbar>
);

export default TopNav;

