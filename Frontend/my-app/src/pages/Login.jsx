import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Nav from '../components/Nav';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signin = async (e) => {
        e.preventDefault();
        const user = { email, password };
        try {
            const res = await axios.post('http://localhost:3008/api/v1/customer/login', user);
            if (res.data.send === "Successful login") {
                let { obj } = res.data;
                localStorage.setItem('userdata', JSON.stringify(obj));
                alert("Successful login");
                navigate('/'); // Redirect to home after successful login
            } else {
                alert("Invalid Email or password");
            }
        } catch (error) {
            console.log("Error:", error);
            alert("Error logging in. Please try again.");
        }
    };

    return (
        <>
            <Nav />
            <Container fluid className='bg-light' style={{ minHeight: '100vh' }}    >
                {/* style={{ minHeight: '100vh' }} */}
                <Row className='justify-content-center align-items-center mt-5 p-5' >
                    <Col xs={12} sm={8} md={6} lg={4}>
                        <div className='p-4 bg-white shadow rounded'>
                            <h2 className="text-center mb-4">Sign in</h2>
                            <Form>
                                <Form.Group className='mb-3'>
                                    <Form.Control type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                                <Form.Group className='mb-4'>
                                    <Form.Control type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>
                                <Button variant='warning' className='w-100 mb-3' onClick={signin} >Sign In</Button>
                                {/* style={{backgroundColor:"#ff6c00"}} */}
                                {/* <Link to='/signup' className='d-block text-center'>Create an account</Link> */}
                                <p className="text-center">
                                   New Member? <Link to='/signup'>Register</Link>here
                                </p>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;
