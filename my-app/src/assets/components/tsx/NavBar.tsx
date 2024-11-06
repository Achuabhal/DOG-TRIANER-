import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import '../css/navbar.css';


const Header: React.FC = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#ffffff' }} variant="light">
      <Container>
        {/* Logo and Title */}
        <Navbar.Brand href="/">
          <img
           

            alt="Dog Training Logo"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
          <span style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '24px', color: '#2b4c6c' }}>
            DOG TRAINING
          </span>
          <span style={{ display: 'block', color: '#666', fontSize: '14px' }}>
            business theme
          </span>
        </Navbar.Brand>

        {/* Toggle for smaller screens */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" style={{ color: '#2b4c6c', fontWeight: 'bold' }}>Home</Nav.Link>
            <NavDropdown title="Services" id="services-dropdown" style={{ color: '#2b4c6c', fontWeight: 'bold' }}>
              <NavDropdown.Item href="#action1">Puppy Training</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Basic Training</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Advanced Training</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Behavior Problems</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Aggression</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about" style={{ color: '#2b4c6c', fontWeight: 'bold' }}>About Us</Nav.Link>
            <Nav.Link href="#testimonials" style={{ color: '#2b4c6c', fontWeight: 'bold' }}>Testimonials</Nav.Link>
            <Nav.Link href="#blog" style={{ color: '#2b4c6c', fontWeight: 'bold' }}>Blog</Nav.Link>
            <Nav.Link href="#register" style={{ color: '#2b4c6c', fontWeight: 'bold' }}>Register</Nav.Link>
            <Nav.Link href="#contact" style={{ color: '#2b4c6c', fontWeight: 'bold' }}>Contact</Nav.Link>
          </Nav>
          <span className="ms-auto" style={{ color: '#2b4c6c', fontWeight: 'bold', fontSize: '18px' }}>
            Call Us (123) 456-7890
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
