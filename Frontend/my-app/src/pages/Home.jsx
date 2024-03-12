import React from 'react';
import Nav from '../components/Nav';
import ProCategories from './ProCategories';
import Slider from '../components/Slider';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <>
      <Nav />
      <Container fluid className="mt-3">
        <Row>
          <Col xs={12} md={4} lg={3} className="mt-3">
            <ProCategories />
          </Col>
          <Col xs={12} md={8} lg={9} className="mt-3">
            <Slider />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
