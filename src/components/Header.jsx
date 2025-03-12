import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header({ activeSection, onSectionChange }) {
  // Props for managing active section and handling section changes

  return (
    <Navbar bg="dark" variant="dark" className="rounded mb-4">
      <Container>
        {/* Brand name and link */}
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        {/* Navigation links */}
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => onSectionChange("about")}
            active={activeSection === "about"}
          >
            About Me
          </Nav.Link>
          <Nav.Link
            onClick={() => onSectionChange("portfolio")}
            active={activeSection === "portfolio"}
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            onClick={() => onSectionChange("contact")}
            active={activeSection === "contact"}
          >
            Contact
          </Nav.Link>
          <Nav.Link
            onClick={() => onSectionChange("resume")}
            active={activeSection === "resume"}
          >
            Resume
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
