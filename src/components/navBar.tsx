import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import nazarLogo from "./../assets/nazarLogo.png";
import githubLogo from "./../assets/github-mark-white.svg";
import linmkedInLogo from "./../assets/In-White-26.png";
import { Image, Nav } from "react-bootstrap";

function NavigationBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-dark"
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
              <Nav.Link href="#projects">Projects</Nav.Link>
              {/* <NavDropdown title="More" id="basic-nav-dropdown">
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
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Bottom navbar */}
      <Navbar className="bg-dark p-0" data-bs-theme="dark" fixed="bottom">
        <Container className="justify-content-center">
          <Nav>
            <Nav.Link
              className="p-1 px-3"
              href="https://github.com/nnakapeliukh/personalSite"
            >
              <Image src={githubLogo} height={"16px"} />
            </Nav.Link>
            <Nav.Link
              className="p-1 px-3"
              href="https://www.linkedin.com/in/nazar-nakapeliukh-813603114/"
            >
              <Image src={linmkedInLogo} height={"16px"} />
            </Nav.Link>
          </Nav>
        </Container>
        <Nav.Item className="justify-content-end mx-3 text-white">
          <small>2024</small>
        </Nav.Item>
      </Navbar>
    </>
  );
}

export default NavigationBar;
