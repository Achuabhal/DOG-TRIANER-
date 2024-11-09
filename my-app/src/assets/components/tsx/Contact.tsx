import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../css/contact.css";

const Contact: React.FC = () => {
  return (
    <Container fluid className="contact-section py-5">
      <Container>
        <Row>
          <Col md={6} className="mb-4">
            <h2 className="mb-4">Contact Us</h2>
            <p className="text-muted">
              We would love to hear from you! Whether you have questions about
              our services, pricing, or anything else, our team is ready to answer
              all your questions.
            </p>
            <address className="text-muted mb-4">
              <strong>Address:</strong> 3511 Shady Brook Dr, Augusta, GA 12345
              <br />
              <strong>Phone:</strong> (123) 456-7890
              <br />
              <strong>Email:</strong> info@example.org
            </address>
            <iframe
              className="map-iframe rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345098967!2d-122.41941558468138!3d37.77492977975833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b9ed9f3%3A0xb284fae0bf648b1e!2s3511%20Shady%20Brook%20Dr%2C%20Augusta%2C%20GA%203096!5e0!3m2!1sen!2sus!4v1697046353451!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </Col>
          <Col md={6}>
            <Card className="p-4 shadow contact-card">
              <Form>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" className="rounded-pill" />
                </Form.Group>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" className="rounded-pill" />
                </Form.Group>
                <Form.Group controlId="formPhone" className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="tel" placeholder="Enter your phone number" className="rounded-pill" />
                </Form.Group>
                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Write your message" className="rounded" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 rounded-pill mt-3">
                  Send Message
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
