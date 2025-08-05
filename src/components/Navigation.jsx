import React from 'react';
import { Navbar,Nav,Container,NavDropdown, Button,} from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar expand="lg"  fixed="top" style={{ backgroundColor: '#0d1b2a' }} className="shadow-sm py-3">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4" style={{ color: '#00b4d8' }}>
          K R A T
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" className="bg-light" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto ms-3">
            <Nav.Link href="#home" className="text-light mx-2">Home</Nav.Link>
            <Nav.Link href="#features" className="text-light mx-2">Features</Nav.Link>
            <Nav.Link href="#pricing" className="text-light mx-2">Pricing</Nav.Link>

            <NavDropdown title={<span className="text-light">Resources</span>} id="nav-dropdown">
              <NavDropdown.Item href="#docs">Docs</NavDropdown.Item>
              <NavDropdown.Item href="#blog">Blog</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#support">Support</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <div className="d-flex gap-2">
            <Button variant="outline-light" size="sm">Login</Button>
            <Button size="sm" style={{ background: '#00b4d8', border: 'none' }}>
              Sign Up
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
