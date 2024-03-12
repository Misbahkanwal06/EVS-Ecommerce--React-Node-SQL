

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Trash2 } from 'react-feather';
import Nav from '../components/Nav';
import axios from 'axios';
import { Card, Container, Row, Col, Image, Button } from 'react-bootstrap';

// import { Modal, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2-react-content';


function Cart() {

  const storageResponse = localStorage.getItem("userdata");
  let customer = JSON.parse(storageResponse);
  // console.log("customer", customer);
  let { cstId } = customer;

  const [products, setProducts] = useState([]);
  console.log("products", products);
  // const [sum,setSum] = useState();
  // console.log("lenght",sum);

  console.log("productslenght", products.length);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:3008/api/v1/cart/getcart/${cstId}`);
        // console.log("res in obj", res.data.obj);
        setProducts(res.data.obj);
        setCount(res.data.obj);
      } catch (error) {
        console.error('Error getting products', error);
      }
    };
    fetchProducts();
  }, [cstId])

  // ****PlUS BUTTON****
  const [count, setCount] = useState([]);
  let sum = count.length;
  console.log("array lenght", sum);
  // console.log("count", count);
  const handleAddClick = (index) => {
    // console.log("index", index);
    setCount((prevCount) => {
      let updatedCounter = [...prevCount];
      // console.log("updatedCounter",updatedCounter);
      // console.log("countabc",count);
      updatedCounter[index].TotalQuantity = (Number(updatedCounter[index].TotalQuantity) || 0) + 1;
      // console.log("updatedCounter",updatedCounter);
      // console.log("count[index].proID",count[index].proID,count[index].TotalQuantity,count[index].custId);
      updateProductQuantity(count[index].proID, count[index].TotalQuantity, count[index].custId);
      return updatedCounter;
    });
  }


  // *****MINUS bUTTON****** 
  const handleMinusClick = (index) => {
    setCount((prevCount) => {
      let updatedCounter = [...prevCount];
      // updatedCounter[index].TotalQuantity = Math.max(0, (Number(updatedCounter[index].TotalQuantity) || 0) - 1);
      updatedCounter[index].TotalQuantity = (Number(updatedCounter[index].TotalQuantity) || 0) - 1;
      updateProductQuantity(count[index].proID, count[index].TotalQuantity, count[index].custId);
      return updatedCounter;
    });
  }



  // *****UPDATE CART PRODUCTS******
  const updateProductQuantity = async (proID, updatedVal, custId) => {

    try {
      console.log("count in try", count);
      const res = count && await axios.post(`http://localhost:3008/api/v1/cart/updatecart/${custId}/${proID}`, { updateQuan: updatedVal });
      console.log("res after update quuantity", res.data);
    } catch (error) {
      console.error('Error Updating products', error);
    }
  }


  // *****CUSTOMERS TOTAL PRODUCTS*******
  // const newarr = count.map((e) => {
  //       console.log("e.TotalQuantity", e.TotalQuantity);
  //       return e.TotalQuantity;
  //   })
  // let sum =  newarr.reduce((acc, currentValue) => acc + parseInt(currentValue),0);
  //   console.log("Sum of array elements:", sum); 



  //************ */ FUNCTIONS FOR STYLES**********
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  //****************************************** */

  const deleteCustomerCart = async (custId, proID) => {
    try {
      const res = await axios.delete(`http://localhost:3008/api/v1/cart/deletecart/${custId}/${proID}`);
      console.log("delete", res.data.obj);
      window.location.reload();
    } catch (error) {
      console.error('Error in deleting card', error);
    }
  }


  return (

    // <>
    //   <Nav sum={products.length} />
    //   {!customer && (
    //     <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    //       <Container>
    //         <h4>Your account is not currently logged in.</h4>
    //         <p>Please login to your account.</p>
    //         <Link to={'/login'} className="btn btn-primary">
    //           Login
    //         </Link>
    //       </Container>
    //     </div>
    //   )}

    //   {customer && (
    //     <Container className="mt-4 shadow">
    //       {products.map((product, index) => (
    //         <Row key={index} className="mb-3 p-2 shadow align-items-center ">
    //           <Col xs={2} className="text-center ">

    //             <Image
    //               src={'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/icons8-delete-48.png?alt=media&token=5127a57b-7d36-47eb-a18f-598075786dd4'}
    //               alt="dustbin"
    //               style={{ width: "40px", height: "28px" }}
    //               className="img-thumbnail"
    //             />
    //           </Col>
    //           <Col xs={2}>
    //             <Image style={{ width: "110px", height: "80px", border: "20px" }} src={product.prodImages} className="img-thumbnail " />
    //           </Col>
    //           <Col xs={4}>
    //             <p className="fw-bold mb-0 ">{product.proName}</p>
    //             <p className=" mb-0" style={{ color: "red" }} >Rs.{product.price}</p>
    //           </Col>
    //           <Col xs={4} className="text-end">
    //             <Button variant="secondary" style={{ backgroundColor: "light-grey" }} onClick={() => handleMinusClick(index)}>-</Button>
    //             <span className="mx-2">{product.TotalQuantity}</span>
    //             <Button variant="secondary" onClick={() => handleAddClick(index)}>+</Button>
    //           </Col>
    //         </Row>
    //       ))}
    //     </Container>
    //   )}
    // </>

    <>
      <Nav sum={products.length} />
      {!customer && (
        <div className="d-flex justify-content-center align-items-center " style={{ height: '100vh' }}>
          <Container>
            <h4>Your account is not currently logged in.</h4>
            <p>Please login to your account.</p>
            <Link to={'/login'} className="btn btn-primary">
              Login
            </Link>
          </Container>
        </div>
      )}

      {customer && (
        <Container className="mt-5">
          <Row>
            <Col xs={8}>
              <Container className="shadow ">
                {products.map((product, index) => (
                  <Row key={index} className="mb-3 p-2 shadow align-items-center  ">
                    <Col xs={2} className="text-center">
                      {/* Dustbin icon */}

                      {/* <Image
                        src={'https://firebasestorage.googleapis.com/v0/b/images-87f4e.appspot.com/o/icons8-delete-48.png?alt=media&token=5127a57b-7d36-47eb-a18f-598075786dd4'}
                        alt="dustbin"
                        style={{ width: "40px", height: "28px" }}
                        className="img-thumbnail"
                      /> */}

                      <Trash2 onClick={() => deleteCustomerCart(product.custId, product.proID)} />

                    </Col>
                    <Col xs={2}>
                      <Image style={{ width: "110px", height: "80px", border: "20px" }} src={product.prodImages} className="img-thumbnail " />
                    </Col>
                    <Col xs={4}>
                      <p className="fw-bold mb-0 ">{product.proName}</p>
                      <p className=" mb-0" style={{ color: "red" }} >Rs.{product.price}</p>
                    </Col>
                    <Col xs={4} className="text-end">
                      {/* style={{ backgroundColor: "rgb(214, 210, 199)" }} */}
                      <Button variant="" onClick={() => handleMinusClick(index)}
                        style={{
                          backgroundColor: hovered ? "rgb(184, 180, 169)" : "rgb(214, 210, 199)",
                          color: hovered ? "white" : "grey"
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >-</Button>
                      <span className="mx-2">{product.TotalQuantity}</span>
                      <Button variant="" onClick={() => handleAddClick(index)}
                        style={{
                          backgroundColor: hovered ? "rgb(184, 180, 169)" : "rgb(214, 210, 199)",
                          color: hovered ? "white" : "grey"
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >+</Button>
                    </Col>
                  </Row>
                ))}
              </Container>
            </Col>
            {/* Total price card */}
            <Col xs={4} className="d-flex justify-content-end">
              <Container className="mt- shadow">
                <Card>
                  <Card.Body>
                    <h5 className="text-end">Total Price</h5>
                    <p className="text-end fw-bold" style={{ color: "red" }}>Rs.{ }</p>
                  </Card.Body>
                </Card>
              </Container>
            </Col>
          </Row>
        </Container>
      )}
    </>
  )
}

export default Cart;


