import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/logo.png";

const navItems = ["Home", "Projects", "Resume", "Contact"];

export const NavBar = ({ setPage }) => {
  return (
    <Navbar sticky="top" variant="dark" expand="lg">
      <Navbar.Brand className="mx-auto" href="/">
        <img src={logo} alt="logo of GJ initials" className="logo-image"></img>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Container>
          <Nav className="ms-auto navbar-top">
            {navItems.map((item) => (
              <Nav.Link
                className="mx-3 nav-link"
                key={item}
                onClick={() => setPage(item)}
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
};
