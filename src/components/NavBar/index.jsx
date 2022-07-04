import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget';

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
  return (

    <Navbar collapseOnSelect expand="md" bg="black" variant="dark">
        <Container>
            <Navbar.Brand> <NavLink to='/' className={"navbar-brand text-white fs-4"}> GAMR </NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown menuVariant='dark' title="Filter" id="collasible-nav-dropdown">
                        <NavLink to='/category/Play Station 5' variant='dark' className={"nav-link text-white text-center dropdown-item"}> Play Station 5 </NavLink>
                        <NavDropdown.Divider />
                        <NavLink to='/category/Xbox Series' className={"nav-link text-white text-center dropdown-item"}> Xbox Series </NavLink>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#cart"> <CartWidget size={32}/> </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar