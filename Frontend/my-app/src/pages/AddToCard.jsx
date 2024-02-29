



import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Nav from '../components/Nav';
import { useLocation } from "react-router-dom";

function AddToCard({payloads}) {
    
    // const location = useLocation();
    // const { payloads} = location.state;
    //  console.log("");
    console.log("abc");
    console.log("payload",payloads);

    const [prodId, setProdId] = useState('');
    const [quantity, setQuantity] = useState('');
    const [custId, setCustId] = useState('');

    
    const addToCartBtn = async (e) => {
        e.preventDefault();
        let payload = { prodId, quantity, custId };
        console.log("payload", payload);
        try {
            console.log("In try")
            console.log(payload)
            const res = await axios.post('http://localhost:3008/api/v1/cart/create', payload)
            console.log('addtocartdata', res)
            console.log("res.data", res.data);
        } catch (error) {
            console.error('Error getting categories', error);
        }
        setProdId('');
        setQuantity('');
        setCustId('');
    };


    // useEffect(() => {
    //     const fetchCategories = async () => {
    //         try {
    //             const res = await axios.post(`http://localhost:3008/api/v1/cart/create`)
    //         } catch (error) {
    //             console.error('Error getting categories', error);
    //         }
    //     }
    //     fetchCategories();
    // }, []);

    return (
        <>
            <Nav />
            <Container className='mt-5 shadows light'>
                <h2 className='text-center'>Add to Cart</h2><br />
                <Form onSubmit={addToCartBtn}>
                    <Form.Group controlId="prodId">
                        {/* <Form.Label>Product ID</Form.Label> */}
                        <Form.Control
                            type="text"
                            placeholder="Enter product ID"
                            value={prodId}
                            onChange={(e) => setProdId(e.target.value)}
                        />
                    </Form.Group><br />

                    <Form.Group controlId="quantity">
                        {/* <Form.Label>Quantity</Form.Label> */}
                        <Form.Control
                            type="text"
                            placeholder="Enter quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </Form.Group><br />

                    <Form.Group controlId="custId">
                        {/* <Form.Label>Customer ID</Form.Label> */}
                        <Form.Control
                            type="text"
                            placeholder="Enter customer ID"
                            value={custId}
                            onChange={(e) => setCustId(e.target.value)}
                        />
                    </Form.Group><br />

                    <Button variant="warning" type="submit">
                        Add to Cart
                    </Button>

                </Form>
            </Container>
        </>
    )
}

export default AddToCard;
