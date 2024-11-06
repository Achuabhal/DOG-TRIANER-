import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section bg-light text-center py-5">
      <Container>
        <Row>
          <Col>
            <h1 className="display-4">Basic Training</h1>
            <p className="lead">
              Basic dog obedience is designed to teach essential commands that every dog should know.
            </p>
            <Button variant="primary" href="#learn-more">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
