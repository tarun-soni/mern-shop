import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

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

            {userInfo ? (
              <NavDropdown title={userInfo.name?.toUpperCase()} id="username">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user px-1"></i>
                  SIGN IN
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
