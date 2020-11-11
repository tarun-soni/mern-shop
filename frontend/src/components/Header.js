import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar
      className="font-weight-bold"
      bg="light"
      expand="lg"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand href="#home">MERNShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/cat">
              <i className="fas fa-shopping-cart px-1"></i>
              CART
            </Nav.Link>
            <Nav.Link href="/signin">
              <i className="fas fa-user px-1"></i>
              SIGN IN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
