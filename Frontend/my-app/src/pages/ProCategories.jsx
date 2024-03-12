import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

function ProCategories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get('http://localhost:3008/api/v1/productsCategory/all-categories');
                setCategories(res.data.obj[0]);
            } catch (error) {
                console.error('Error getting categories', error);
            }
        };
        fetchCategories();
    }, []);

    return (
        <Container fluid>
            <Row>
                <Col>
                    <ListGroup variant="flush" className="shadow rounded  p-3">
                        {Array.isArray(categories) &&
                            categories.map((e) => (
                                <Link
                                    to={`/products/${e.proCatId}`}
                                    key={e.proCatId}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <ListGroup.Item className="daraz-category-item  mb-3">
                                        <Image src={e.image} fluid className="category-icon" />
                                        <span className="category-name">{e.catName}</span>
                                    </ListGroup.Item>
                                </Link>
                            ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default ProCategories;
