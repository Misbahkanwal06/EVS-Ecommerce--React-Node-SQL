


import React from 'react'
import Nav from '../components/Nav';
import ProCategories from './ProCategories';
import NavList from '../components/NavList';

import Slider from '../components/Slider';
import { Container, Row, Col, Card, Image } from "react-bootstrap";


function Home() {
  return (
    <>
      <Nav />

      {/* xs={3} md={3} lg={3}
      {/* style={{ fontSize: "12px" }} */}

     <Row className=' overflow-hidden'  >
        <Col fluid xs={3} md={3} lg={3}
          className=" mt-3 d-flex " style={{ fontSize: "12px" }}>
          <ProCategories />
        </Col>
        <Col fluid xs={6} md={8} lg={9}  className=' mt-3'>
          <Slider />
        </Col>
      </Row>  

       
      {/* <ProCategories />
      <Slider /> */}

      {/* <NavList  /> */}
    </>
  )
}

export default Home;
