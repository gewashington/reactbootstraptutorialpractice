import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>CodeLife</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem evenKey={1} componentClass={Link} href="/" to="/">
                Home
              </NavItem>
              <NavItem evenKey={2} componentClass={Link} href="/" to="/about">
                About
              </NavItem>
              <NavItem evenKey={3} componentClass={Link} href="/" to="/news">
                News
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar.Header>
      </Navbar>
    )
  }
}
