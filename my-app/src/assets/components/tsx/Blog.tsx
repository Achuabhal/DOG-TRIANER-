import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutSection: React.FC = () => {
  return (
    <Container className="py-5" id="about">
      <Row>
        <Col>
          <h2>Practical. Positive. Lasting Results.</h2>
          <p>
            Welcome to Dog Training theme. Get ready to experience a new style of dog training: a practical, positive, relationship-focused approach that provides lasting results.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
