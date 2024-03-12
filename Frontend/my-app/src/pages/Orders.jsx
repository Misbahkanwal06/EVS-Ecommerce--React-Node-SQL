
import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import { Card, Container, Row, Col, Image, Button } from 'react-bootstrap';


function Orders() {
    console.log("in order");
    const [orderList, setOrderList] = useState([]);

    // useEffect(() => {
    //     const fetchOrders = async () => {
    //         const res = await axios.get('http://localhost:3008/api/v1/order/getorder');
    //         console.log("res", res);
    //         console.log("order", res.data.obj);
    //         setOrderList(res.data.obj);
    //     }
    //     // fetchOrders();
    // }, []);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get('http://localhost:3008/api/v1/order/getorder');
                console.log("res", res);
                console.log("order", res.data.obj);
                setOrderList(res.data.obj);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        }
        fetchOrders();
    }, []);

    // const showOrderData 
    return (
        <>
            <Nav />
            <Container fluid>
                <Row>
                    <Col xs={12} md={4} lg={3}>
                        <ListGroup variant="flush" className="shadow rounded  p-3">
                            {Array.isArray(orderList) &&
                                orderList.map((e) => (
                                    <Link
                                        // to={`/products/${e.proCatId}`}
                                        // key={e.proCatId}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <ListGroup.Item className="daraz-category-item  mb-3" >
                                            {/* onClick={() => showOrderData()} */}
                                            {/* // <Image src={e.image} fluid className="category-icon" /> */}
                                            <span className="category-name" > {e.ordNo}</span>
                                        </ListGroup.Item>
                                    </Link>
                                ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Orders;
