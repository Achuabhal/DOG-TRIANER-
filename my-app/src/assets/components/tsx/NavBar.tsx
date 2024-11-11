import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import '../css/navbar.css';

// Example components for each section
import Home from './Home';
import About from './About';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Register from './Register';
import Contact from './Contact';

const Header: React.FC = () => {
  // State to track the active component
  const [activeComponent, setActiveComponent] = useState<'Home' | 'About' | 'Testimonials' | 'Blog' | 'Register' | 'Contact'>('Home');
  
  // State to manage navbar collapse on mobile view
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Mapping of nav items to corresponding components
  const componentsMap: { [key in 'Home' | 'About' | 'Testimonials' | 'Blog' | 'Register' | 'Contact']: JSX.Element } = {
    Home: <Home />,
    About: <About />,
    Testimonials: <Testimonials />,
    Blog: <Blog />,
    Register: <Register />,
    Contact: <Contact />,
  };

  // Handle navigation item click
  const handleNavClick = (componentName: 'Home' | 'About' | 'Testimonials' | 'Blog' | 'Register' | 'Contact') => {
    setActiveComponent(componentName);
    setIsNavbarOpen(false); // Close the navbar when a link is clicked
  };

  // Handle Navbar toggle (for mobile view)
  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar expand="lg" style={{ backgroundColor: 'black'  }} fixed="top" variant="light" className="ms-lg-5 me-lg-5">
        <Container>
          {/* Logo and Title */}
          <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              alt="Dog Training Logo"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            <span style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '24px', color: '#fcbb45' }}>
              DOG TRAINING
            </span>
            <span style={{ display: 'block', color: '#fcbb45', fontSize: '14px' }}>
              business theme
            </span>
          </Navbar.Brand>

          {/* Toggle for smaller screens */}
          <Navbar.Toggle 
            aria-controls="navbar-nav" 
            onClick={handleNavbarToggle} // Manage toggle on click
          />

          {/* Navbar Links */}
          <Navbar.Collapse id="navbar-nav" in={isNavbarOpen}> {/* This ensures the collapse is controlled */}
            <Nav className="ms-auto">
              <Nav.Link
                href="#"
                style={{ color: '#fcbb45', fontWeight: 'bold' }}
                onClick={() => handleNavClick('Home')}
              >
                Home
              </Nav.Link>
              <NavDropdown
                title="Services"
                id="services-dropdown"
                style={{ color: '#fcbb45', fontWeight: 'bold' }}
              >
                <NavDropdown.Item onClick={() => handleNavClick('Home')}>Puppy Training</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavClick('Home')}>Basic Training</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavClick('Home')}>Advanced Training</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavClick('Home')}>Behavior Problems</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavClick('Home')}>Aggression</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href="#"
                style={{ color: '#fcbb45', fontWeight: 'bold' }}
                onClick={() => handleNavClick('About')}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="#"
                style={{ color: '#fcbb45', fontWeight: 'bold' }}
                onClick={() => handleNavClick('Testimonials')}
              >
                Testimonials
              </Nav.Link>
              <Nav.Link
                href="#"
                style={{ color: '#fcbb45', fontWeight: 'bold' }}
                onClick={() => handleNavClick('Blog')}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                href="#"
                style={{ color: '#fcbb45', fontWeight: 'bold' }}
                onClick={() => handleNavClick('Register')}
              >
                Register
              </Nav.Link>
              <Nav.Link
                href="#"
                style={{ color: '#2b4c6c', fontWeight: 'bold' }}
                onClick={() => handleNavClick('Contact')}
              >
                Contact
              </Nav.Link>
            </Nav>
            <span className="ms-auto" style={{ color: '#2b4c6c', fontWeight: 'bold', fontSize: '18px' }}>
              Call Us (123) 456-7890
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Conditional Rendering of Active Component */}
      <div style={{ paddingTop: '120px' }}>
        {componentsMap[activeComponent]}
      </div>
    </div>
  );
};

export default Header;
