import React, { useEffect, useState } from 'react'
// import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { IconName } from "react-icons/";

import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Nav({ sum }) {

    const storageResponse = localStorage.getItem("userdata");

    // userUpdatedCArt
    let customer = JSON.parse(storageResponse);
    let { fName, lName } = customer || {};
    console.log("customer", customer);


    // SHOW QUANTITY AT CART*************************
    // const newarr = prodquan.map((e) => {
    //     console.log("e.TotalQuantity", e.TotalQuantity);
    //     return e.TotalQuantity;
    // })
    // const sum = newarr.reduce((acc, currentValue) => acc + parseInt(currentValue),0);
    // console.log("Sum of array elements:", sum); 

    return (
        <div>
            <Navbar className=" bg-warning" style={{ height: "80px" }}>
                <Container>
                    {/* <Navbar.Brand href="#home" className='fs-1 text-light'>{fName ? fName : "Nav"}</Navbar.Brand> */}
                    <Navbar.Brand href="#" className='fs-1 text-light'>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/logomk.jpg?alt=media&token=ddd27191-5de0-462a-a3aa-a3c6e9ba0877"
                            width="100"
                            height="60"
                            className="d-inline-block align-top"
                            alt=""
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Form inline >
                            <Row className=''>
                                <Col xs="auto">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className=" mr-sm-2"
                                        alt=""
                                    />
                                </Col>

                                <Col xs="auto">
                                    <img
                                        className="profile-img"
                                        id="userImg"
                                        src="//img.alicdn.com/imgextra/i1/O1CN013ue9Hm1FjZzC0ri2a_!!6000000000523-2-tps-32-32.png"
                                        alt=""
                                    />

                                    {fName ? fName :
                                        <Link to={'/login'}>
                                            <Button variant="outline-light" id="button-addon2" style={{ border: "0px" }}>
                                                login
                                            </Button>
                                        </Link>
                                    }
                                </Col>

                                {!fName ? <>
                                    <Col>
                                        <li className=" text-light ">|</li>
                                    </Col>
                                    <Col xs="auto">
                                        <Link to={'/signup'}>
                                            <Button variant="outline-light" id="button-addon2" style={{ border: "0px" }}>
                                                Signup
                                            </Button>
                                        </Link>
                                    </Col>
                                </> : " "
                                }


                                <Col xs="auto" >

                                    {/* <Image
                                        src={''}> */}

                                    <Link to={'/cart'} style={{ position: 'relative' }}>
                                        <span className="cart-icon" >
                                            <svg
                                                width={30}
                                                height={30}
                                                viewBox="0 0 32 32"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                data-spm-anchor-id="a2a0e.home.dcart.i0.60674076s78Kco"
                                            >                                                
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M4.51345 5H1.33325V3H6.15306L7.21972 8.33333H30.5315L27.5012 25H8.51345L4.51345 5ZM7.61972 10.3333L10.1531 23H25.832L28.135 10.3333H7.61972Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M11.9999 28C11.9999 28.7364 11.403 29.3333 10.6666 29.3333C9.93021 29.3333 9.33325 28.7364 9.33325 28C9.33325 27.2636 9.93021 26.6667 10.6666 26.6667C11.403 26.6667 11.9999 27.2636 11.9999 28Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M25.3333 29.3333C26.0696 29.3333 26.6666 28.7364 26.6666 28C26.6666 27.2636 26.0696 26.6667 25.3333 26.6667C24.5969 26.6667 23.9999 27.2636 23.9999 28C23.9999 28.7364 24.5969 29.3333 25.3333 29.3333Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </span>
                                        <p className='text-center' style={{ position: 'absolute', top: -10, right: 0, backgroundColor: 'red', margin: 0, padding: '0px', borderRadius: '50%', color: 'white', width: "15px" }}>{sum}</p>
                                    </Link>

                                    {/* </Image> */}
                                </Col>
                            </Row>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Nav