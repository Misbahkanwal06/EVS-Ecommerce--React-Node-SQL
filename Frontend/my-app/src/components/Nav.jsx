import React from 'react'

// import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { IconName } from "react-icons/";

import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Nav() {


    // const storageResponse = localStorage.getItem("userdata");
    // let customer = JSON.parse(storageResponse);
    // console.log("customer", customer);s
    // let { fName, lName } = customer;
    // console.log("fname", fName, lName);

    const storageResponse = localStorage.getItem("userdata");
    let customer = JSON.parse(storageResponse);
    let { fName, lName } = customer || {};
    return (
        <div>
            <Navbar className=" bg-warning" style={{ height: "70px" }}>
                <Container>

                    {/* <Navbar.Brand href="#home" className='fs-1 text-light'>{fName ? fName : "Nav"}</Navbar.Brand> */}
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Form inline >
                            <Row className=''>
                                <Col xs="auto">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className=" mr-sm-2"
                                    />
                                </Col>

                                {/* <Col xs="auto">
                                    <div className="logged-in-wrap">
                                        <img
                                            className="profile-img"
                                            id="userImg"
                                            src="//img.alicdn.com/imgextra/i1/O1CN013ue9Hm1FjZzC0ri2a_!!6000000000523-2-tps-32-32.png"
                                            alt=""
                                        />
                                    </div>
                                </Col> */}

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

                                    {/* <Link to={'/login'}>
                                        <Button variant="outline-light" id="button-addon2" style={{ border: "0px" }}>
                                            login
                                        </Button>
                                    </Link> */}

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

                           
                                <Col xs="auto">
                                    {/* <Image
                                        src={''}> */}
                                    <Link to={'/cart'}>
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
