
import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import { Card, Container, Row, Col, Image, Button } from 'react-bootstrap';


function Orders() {

    const storageResponse = localStorage.getItem("userdata");
    let customer = JSON.parse(storageResponse);
    console.log("customer", customer);
    let { cstId } = customer;

    const [orderList, setOrderList] = useState([]);
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get(`http://localhost:3008/api/v1/order/getorderNo/${cstId}`);
                setOrderList(res.data.obj);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        }
        fetchOrders();
    }, []);

    const [orderDetails, setOrderDetails] = useState([]);
    console.log("orderdetails", orderDetails);
    const showOrderData = async (ordNo) => {
        // console.log("in func", ordNo);
        try {
            const res = await axios.get(`http://localhost:3008/api/v1/order/getorderdata/${ordNo}`);
            console.log("order deatils  res", res.data.obj);
            setOrderDetails(res.data.obj);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    }

    const newarr = orderDetails.map((e) => {
        return e.price;
    })
    let TotalPrice = newarr.reduce((acc, currentValue) => acc + parseInt(currentValue), 0);
    console.log("TotalPrice:", TotalPrice);

    return (
        <>
            <Nav />
            <Container fluid className=''>
                <h1 >Order Details!</h1>
                <Row className='mt-5'>
                    <Col xs={2} md={4} lg={2} className='bg'>
                        {/* <p>Order Number</p> */}
                        <ListGroup variant="flush" className="shadow rounded mt-4  p-3">
                            {Array.isArray(orderList) &&
                                orderList.map((e) => (
                                    <ListGroup.Item className="daraz-category-item  mb-3"
                                        key={e.ordNo}
                                        onClick={() => showOrderData(e.ordNo)} >
                                        <span className="category-name" >{e.ordNo}</span>
                                    </ListGroup.Item>
                                ))}
                        </ListGroup>
                    </Col>

                    <Col xs={6} >
                        <Container className="shadow  mt-4">
                            {Array.isArray(orderDetails) && orderDetails.map((e, index) => (
                                <Row key={index} className="mb-3 p-2 shadow align-items-center  ">
                                    {/* <Col xs={3} className="text-center">
                                        <p>Product ID : {e.prodId}</p>
                                    </Col> */}
                                    <Col xs={3}>
                                        <Image style={{ width: "110px", height: "80px", border: "20px" }} src={e.prodImages} className="img-thumbnail " />
                                    </Col>
                                    <Col xs={3}>
                                        <p className="fw-bold mb-0 "> Total Quantity : {e.totalQty}</p>
                                        <p className=" mb-0" style={{ color: "red" }} >Total Amouunt : {e.price}</p>
                                    </Col>

                                </Row>
                            ))}
                        </Container>
                        <Row>
                            {
                                orderDetails.length > 0 && <Card className='p-5' style={
                                    { display: "flex", justifyContent: "space-between", fontWeight: "bold" }
                                }>
                                    <div style={{ color: "red" }}>
                                        Total Amount : {TotalPrice}
                                    </div>
                                    {/* <div><p style={{ color: "red" }}>Rs. {TotalPrice}</p></div> */}
                                    {/* <p className=" mb-0" style={{ color: "red" }} >Total Amouunt : {TotalPrice}</p> */}
                                </Card>
                            }

                            {/* <Card.Body style={
                                { display: "flex", justifyContent: "space-between", fontWeight: "bold" }
                            } >
                                <div>
                                    Total
                                </div>
                                <div><p>Rs. {TotalPrice}</p></div>
                            </Card.Body> */}
                        </Row>
                    </Col>

                </Row>
            </Container>

        </>
    )
}

export default Orders;

