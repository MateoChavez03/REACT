import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import CartWidget from '../CartWidget';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="black" variant="dark">
        <Container>
            <Navbar.Brand href="#home" className="fs-4"> GAMR </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Filter" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#filter/PS5">Play Station 5</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#filter/XS">Xbox Series</NavDropdown.Item>
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