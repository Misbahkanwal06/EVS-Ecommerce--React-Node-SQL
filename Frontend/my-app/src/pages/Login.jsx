

import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Button } from 'react-bootstrap';
import Home from './Home';
import Nav from '../components/Nav';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const sendtoaddtocart = () => {

        // const storageResponse = localStorage.getItem("userdata");
        // let customer = JSON.parse(storageResponse);
        // console.log("customer", customer);
        // if (!customer) navigate('/');
        // navigate
        // else if (customer) 
        navigate('/addtocart');
    }

    const signin = async (e) => {
        e.preventDefault();
        const user = { email, password };
        console.log("Login user:", user);
        try {
            const res = await axios.post('http://localhost:3008/api/v1/customer/login', user);
            console.log("loginres", res);
            console.log("Login response:", res.data);
            if (res.data.send === "Successful login") {
                console.log("login res.data.obj", res.data.obj);
                let { obj } = res.data;
                localStorage.setItem('userdata', JSON.stringify(obj));
                sendtoaddtocart();
                alert("Successfull login");
                window.location.reload();
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
            <Container fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
                <div className='mask gradient-custom-3'></div>
                <div className='m-5' style={{ maxWidth: '600px' }}>
                    <Form className='px-5'>
                        <h2 className="text-uppercase text-center mb-5">Signin</h2>
                        <Form.Group className='mb-4'>
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control size='lg' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-4'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control size='lg' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button className='mb-4 w-100 gradient-custom-4' size='lg' onClick={signin}>SignIn</Button>
                        <div>
                            <p>Do not have an account?</p>
                        </div>
                        <Link to='/signup'>
                            <Button className='mb-4 w-100 gradient-custom-4' variant='outline-info' size='lg'>Create an account</Button>
                        </Link>
                    </Form>
                </div>
            </Container>
        </>

    );
};

export default Login;
