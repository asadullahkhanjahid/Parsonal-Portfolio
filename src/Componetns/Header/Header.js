import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import { NavLink } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        className="sticky-top"
        variant="dark"
        collapseOnSelect
        expand="lg">
        <Container>
          <Navbar.Brand href="#home">π½ππππππ πΆππππ </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className=" justify-text-end fw-normal">
            <Nav className="mx-auto ">
              <Nav.Link className="nav" as={HashLink} to="#home">
                Home
              </Nav.Link>
              <Nav.Link className="nav" as={HashLink} to="#explore">
                Explore
              </Nav.Link>
              <Nav.Link className="nav" as={HashLink} to="#skill">
                Skills
              </Nav.Link>
              <Nav.Link className="nav" as={HashLink} to="#projects">
                Projects
              </Nav.Link>
              <Nav.Link className="nav" as={HashLink} to="#contact">
                Contact Us
              </Nav.Link>
              <Nav.Link className="nav" as={HashLink} to="#about">
                About Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
