import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../css/footer.css';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#45392d', color: '#fff', padding: '40px 0' }}>
      <Container>
        <Row>
          {/* Our Services Column */}
          <Col md={4}>
            <h5>Our Services</h5>
            <ul className="list-unstyled">
              <li>Puppy Training</li>
              <li>Basic Training</li>
              <li>Advanced Training</li>
              <li>Behavior Problems</li>
              <li>Dogs & Children</li>
              <li>Aggression</li>
            </ul>
          </Col>

          {/* Location Column */}
          <Col md={4}>
            <h5>Location</h5>
            <p>Donec non augue faucibus, tincidunt lectus non, adipiscing augue cras libero nulla.</p>
            <address>
              3511 Shady Brook Dr, Augusta, GA 12345<br />
              info@example.org<br />
              (123) 456-7890
            </address>
            <Button variant="primary">Get directions</Button>
          </Col>

          {/* Newsletter Column */}
          <Col md={4}>
            <h5>Newsletter</h5>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label className="sr-only">Name</Form.Label>
                <Form.Control type="text" placeholder="Name" className="mb-2" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label className="sr-only">Email</Form.Label>
                <Form.Control type="email" placeholder="Email" className="mb-2" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Footer Bottom Text */}
        <Row className="pt-4">
          <Col className="text-center">
            <small>© Copyright Nexus Themes</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
