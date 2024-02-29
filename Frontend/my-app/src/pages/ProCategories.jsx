


import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
// import Slider from '../components/Slider';
import Productss from './Productss';
import { useNavigate } from 'react-router-dom'


function ProCategories() {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedProCatId, setSelectedProCatId] = useState(null);
    // console.log("selectedProCatId", selectedProCatId);
    // console.log("products", products);
    // const [isShown, setIsShown] = useState(false);
    // const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get('http://localhost:3008/api/v1/productsCategory/all-categories')
                console.log("res data", res.data.obj);
                setCategories(res.data.obj[0]);
            } catch (error) {
                console.error('Error getting categories', error);
            }
        }
        fetchCategories();
    }, []);

    
    const fetchProducts = async (proCatId) => {
        console.log("proCatId", proCatId);
        try {
            const res = await axios.get(`http://localhost:3008/api/v1/products/all-products/${proCatId}`);
            console.log("set product", res.data.obj);
            setProducts(res.data.obj);
        } catch (error) {
            console.error('Error getting products', error);
        }
    };

    const categoryRelatedProducts = (proCatId) => {
        fetchProducts(proCatId);
        setSelectedProCatId(proCatId);
        // <Productss proCatId={proCatId}/>
        // navigate(`/products?selectedProCatId=${proCatId}`);s
        };

    return (
            <Container fluid className="mt-3  ">
                <Row>
                    <Col fluid xs={3} md={4} lg={3} className=" d-flex ">
                        {/* <Card fluid >
                        </Card> */}
                         <ListGroup variant="flush" className="shadow rounded p-2 "  >
                                {
                                    Array.isArray(categories) && categories.map((e) => {
                                        // console.log("e", e);
                                        return <>
                                            {/* key={e.proCatId}   */}
                                            <div className='d-flex p-1 ' style={{ width:"250px" }} key={e.proCatId}>
                                                <div className=''>
                                                    <Image
                                                        fluid
                                                        src={e.image}
                                                        style={{ width: "50px", height: "36px", border: "0px" }}
                                                    >
                                                    </Image>
                                                </div>

                                                {/* <Link to={`/products?selectedProCatId=${selectedProCatId}`}> */}
                                                {/* <Link to="/products"> */}


                                                <Link to={`/products/${e.proCatId}`}>
                                                    <ListGroup.Item
                                                        onClick={() => categoryRelatedProducts(e.proCatId)}
                                                        // onMouseEnter={() => categoryRelatedProducts(e.proCatId)}
                                                        // onMouseLeave={() => categoryRelatedProducts("")}>
                                                        style={{ width: "170px", height: "36px", border: "0px"  }} className='shadow'>{e.catName}
                                                    </ListGroup.Item>
                                                </Link>
                                            </div>

                                            {/* <div className='d-flex p-1'>
                                                <div className='p-2'>
                                                    <img src={e.image} alt="prod cat image" style={{ width: "50px", height: "45px", border: "0px" }} />
                                                </div>
                                                <ListGroup.Item
                                                    key={e.proCatId}
                                                    onClick={() => categoryRelatedProducts(e.proCatId)}>{e.catName}
                                                </ListGroup.Item>
                                    </div> */}
                                        </>
                                    })
                                }
                            </ListGroup>
                    </Col>
                </Row>
            </Container>
        
    )
}

export default ProCategories;

