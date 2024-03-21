

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/Nav';
import ProCategories from './ProCategories';
// import AddToCard from './AddToCard';

function Productss() {

  const [products, setProducts] = useState([]);
  const { selectedProCatId } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:3008/api/v1/products/all-products/${selectedProCatId}`);
        setProducts(res.data.obj);
      } catch (error) {
        console.error('Error getting products', error);
      }
    };
    fetchProducts();
  }, [selectedProCatId])


  ////
  function handleAddToCart(prodId) {
    const storageResponse = localStorage.getItem("userdata");
    let customer = JSON.parse(storageResponse);
    let custId = customer.cstId;
    let quantity = 1;
    localStorage.setItem(prodId, JSON.stringify({ quantity: 1 }))
    if (!customer) navigate('/signup');
    else {
      const payloads = { prodId, custId, quantity };
      console.log("payloads", payloads);
      const addToCartBtn = async () => {
        try {
          const res = await axios.post('http://localhost:3008/api/v1/cart/create', payloads)
          console.log("addtocartdata", res.data);
          navigate('/cart');
        } catch (error) {
          console.error('Error getting categories', error);
        }
      };
      addToCartBtn();
    }
  }

  return (
    <div>
      <Nav />
      <Container fluid>
        <Row className=' mt-2'>
          {/* Categories Section */}
          <Col lg={3} md={3} sm={3} xs={12} className='mb-3 '>
            <ProCategories />
          </Col>
          {/* Products Section */}
          <Col lg={9} md={9} sm={9} xs={12} className='mb-3  d-flex flex-wrap'>
            {products.map((product) => (
              <Card key={product.proID} className='m-2' style={{ flex: '0 0 auto', width: 'calc(33.33% - 4px)' }}>
                <Card.Img variant="top" src={product.prodImages} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{product.proName}</Card.Title>
                  <Card.Text>
                    {product.price}
                  </Card.Text>
                  <button onClick={() => handleAddToCart(product.proID)} className="btn btn-primary btn-block">Add to cart</button>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Productss;











// function handleAddToCart(proID) {
//   // Your code to handle adding the product to the cart
//   console.log("productId", proID);
//   const storageResponse = localStorage.getItem("userdata");
//   let customer = JSON.parse(storageResponse);
//   console.log("customer", customer);
//   if (!customer) navigate('/signup');
//   console.log("customerID", customer.cstId);
// }

// // Inside the return statement of your component
// {products.map((product) => (
//   <Card key={product.proID} className='m-2' style={{ flex: '0 0 auto', width: 'calc(33.33% - 4px)' }}>
//     <Card.Img variant="top" src={product.prodImages} style={{ height: '200px', objectFit: 'cover' }} />
//     <Card.Body>
//       <Card.Title>{product.proName}</Card.Title>
//       <Card.Text>
//         {product.price}
//       </Card.Text>
//       {/* Use an arrow function to pass product.proID to handleAddToCart */}
//       <button onClick={() => handleAddToCart(product.proID)}>Add to cart</button>
//     </Card.Body>
//   </Card>
// ))}
