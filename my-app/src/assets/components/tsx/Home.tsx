import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg={6} className="text-lg-left text-center mb-4 mb-lg-0">
            <Image
              src="path/to/your/dog-training-image.jpg" // Update with your image path
              alt="Dog Training"
              fluid
              className="rounded-3 shadow-sm"
            />
          </Col>
          <Col lg={6} className="text-lg-left text-center">
            <h2 className="display-5 fw-bold mb-3">
              Practical. Positive. Lasting Results.
            </h2>
            <p className="lead fs-5 mb-4">
              Welcome to Dog Training theme. Get ready to experience a new style of dog training: a practical, positive, relationship-focused approach that provides lasting results.
            </p>
            <a href="#services" className="btn btn-outline-primary rounded-pill py-2 px-4">
              Explore Our Services
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
