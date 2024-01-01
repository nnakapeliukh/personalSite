import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import nazarLogo from "./../assets/nazarLogo.png";
import { Nav, NavDropdown } from "react-bootstrap";

function NavigationBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
        data-bs-theme="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand>
            {/* <Navbar.Brand href="#home"> */}
            <img
              alt=""
              src={nazarLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Nazar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About me</Nav.Link>
              <Nav.Link href="#highlights">Highlights</Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="#resume">
                  More to come...
                </NavDropdown.Item>
                <NavDropdown.Item href="#projects">
                  More to come...
                </NavDropdown.Item>
                <NavDropdown.Item href="#portfolio">
                  More to come...
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">More to come...</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
