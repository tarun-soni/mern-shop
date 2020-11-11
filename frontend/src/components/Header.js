import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar
      className="font-weight-bold"
      bg="light"
      expand="lg"
      collapseOnSelect
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>MERNShop</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/cart">
              <Nav.Link>
                <i className="fas fa-shopping-cart px-1"></i>
                CART
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>
                <i className="fas fa-user px-1"></i>
                SIGN IN
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
