

import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import axios from 'axios';
// import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { Card, Container, Row, Col, Image } from 'react-bootstrap';

// import { Modal, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2-react-content';

function Cart() {
  const storageResponse = localStorage.getItem("userdata");
  let customer = JSON.parse(storageResponse);
  console.log("customer", customer);
  let custId = customer.cstId;
  const [products, setProducts] = useState();
  console.log(products);

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:3008/api/v1/cart/getcart/${custId}`);
        console.log("productsres", res);
        setProducts(res.data.obj);
      } catch (error) {
        console.error('Error getting products', error);
      }
    };
    fetchProducts();
  }, [custId])

  return (

    <>
      <Nav />
      {!customer && (
        // <div className=' d-flex justify-content-center align-items-center shadow rounded' style={{ with: "400px", height: "300px" }}>
        //   <div className='p-3 '>
        //     <h1> "Your account is not currently logged in. Please Login to your account"</h1>
        //     <Link to={'/login'}>
        //       <button className='shadow' style={{ outline: 'none' }}>Login</button>
        //     </Link>
        //   </div>
        // </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: '100vh' }}
        >
          <Card className="shadow rounded" style={{ width: '400px' }}>
            <Card.Body className="p-3">
              <h4>Your account is not currently logged in.</h4>
              <p>Please login to your account.</p>
              <Link to={'/login'} className="btn btn-primary">
                Login
              </Link>
            </Card.Body>
          </Card>
        </div>
      )
      }
      {/* lg={12} md={9} sm={9} xs={12} */}
      {
        customer && (
          <>
            <Container fluid>
              <h1 className="mt-4 mb-4 text-center "> Cart Products</h1>
              <Row>
                <Col className='mb-3  d-flex flex-wrap'>

                  <div className='m-2 shadows  bg-secondary p-3 ' style={{
                    width: "100%", height: '180px',
                    display: "flex", justifyContent: "space-between"
                  }}>
                    <div className='bg-info' style={{ width: "200px", height: "150px" }}>
                      <Image
                        fluid
                        src={'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg'}
                        style={{ width: "200px", height: "140px", border: "0px" }}
                      >
                      </Image>
                    </div>
                    <div className='' style={{ width: "300px", height: "150px" }}>
                      <p>product Name</p>
                    </div>
                    <div style={{ width: "300px", height: "150px" }}>
                      product quantity
                    </div>
                  </div><br />
                  <div className='m-2 shadows  bg-secondary p-3 ' style={{
                    width: "100%", height: '180px',
                    display: "flex", justifyContent: "space-between"
                  }}>
                    <div  style={{ width: "200px", height: "150px" }}>
                      <Image
                        fluid
                        src={'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg'}
                        style={{ width: "200px", height: "140px", border: "0px" }}
                      >
                      </Image>
                    </div>
                    <div className='' style={{ width: "300px", height: "150px" }}>
                      <p>product Name</p>
                    </div>
                    <div className='' style={{ width: "300px", height: "150px" }}>
                      product quantity
                    </div>
                  </div>



                  {/* <Card className='m-2' style={{ height: '200px', objectFit: 'cover' }} >
                    <Card.Img variant="top" src={'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg'} style={{ height: '100px', objectFit: 'cover' }} />
                    <Card.Body>
                      <Card.Title>Product Name</Card.Title>
                      <Card.Text>
                        Product quantity
                      </Card.Text>
                    </Card.Body>
                  </Card> */}
                </Col>
              </Row>
            </Container>
          </>
        )
      }
    </>
  )
}

export default Cart;





// const SweetAlert = ({ title, text, type, show }) => {
//   return (
//     <Swal
//       show={show}
//       title={title}
//       text={text}
//       type={type}
//       onConfirm={() => setShow(false)}
//     />
//   );
// };

// export default SweetAlert;
