import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutUs: React.FC = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">About Us</h2>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Image 
            src="path_to_your_image.jpg" 
            alt="A couple playing with their dog in a park" 
            fluid 
            className="mb-4" 
          />
        </Col>
      </Row>
      <Row>
        <Col md={10} className="mx-auto">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed dignissim eros. Aenean egestas quam vestibulum ante porttitor, eu bibendum mi consequat. Donec consequat auctor ligula vitae gravida. Nam id nulla in nunc aliquam tincidunt ut id ligula. Suspendisse mollis nisi non augue tincidunt, a interdum sapien congue. Cras ultricies neque id quam semper, quis placerat eros condimentum. Aliquam sit amet nisi faucibus, laoreet odio quis, egestas neque. Sed lobortis congue orci, eget auctor sem laoreet eu. Aenean interdum purus a luctus varius. Proin a sagittis sem. Nunc eu nisl eget eros aliquet convallis. Proin sed neque ut eros lacinia vulputate. Donec placerat est interdum auctor imperdiet. Vestibulum quis tincidunt metus. Phasellus et neque turpis.
          </p>
          <p>
            Morbi adipiscing, lectus id varius semper, eros sem vestibulum arcu, ac accumsan mauris risus commodo felis. Fusce luctus ac arcu et euismod. Donec fermentum leo vitae felis sollicitudin molestie. Mauris luctus arcu augue, et vehicula mi interdum ac. Nullam mattis volutpat lobortis. Phasellus vestibulum pulvinar odio, dapibus tincidunt turpis tincidunt et. Nullam viverra at quam non commodo. Duis lectus est, accumsan a erat porta, posuere condimentum dolor. Fusce a purus erat. Sed suscipit urna risus, at consectetur leo consequat id. Integer magna dolor, ultrices eget molestie id, pretium non urna.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
