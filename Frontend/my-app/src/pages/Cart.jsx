

import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ArrowLeft } from 'react-feather';
import Nav from '../components/Nav';
import axios from 'axios';
import { Card, Container, Row, Col, Image, Button } from 'react-bootstrap';


// import { Modal, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2-react-content';

function Cart() {

  const navigate = useNavigate();

  const storageResponse = localStorage.getItem("userdata");
  let customer = JSON.parse(storageResponse);
  let { cstId } = customer;
  const [products, setProducts] = useState([]);
  console.log("products", products);
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



  // **************PlUS BUTTON************************
  const [count, setCount] = useState([]);

  // console.log("count", count);
  const handleAddClick = (index) => {

    setCount((prevCount) => {
      let updatedCounter = [...prevCount];
      updatedCounter[index].TotalQuantity = (Number(updatedCounter[index].TotalQuantity) || 0) + 1;
      updateProductQuantity(count[index].proID, count[index].TotalQuantity, count[index].custId);
      return updatedCounter;
    });
  }


  // *****MINUS bUTTON******

  const handleMinusClick = (index) => {
    setCount((prevCount) => {
      let updatedCounter = [...prevCount];
      updatedCounter[index].TotalQuantity = (Number(updatedCounter[index].TotalQuantity) || 0) - 1;
      updateProductQuantity(count[index].proID, count[index].TotalQuantity, count[index].custId);
      return updatedCounter;
    });
  }

  // *****UPDATE CART PRODUCTS******
  const updateProductQuantity = async (proID, updatedVal, custId) => {
    try {
      const res = count && await axios.post(`http://localhost:3008/api/v1/cart/updatecart/${custId}/${proID}`, { updateQuan: updatedVal });
      // console.log("res after update quuantity", res.data);
    } catch (error) {
      console.error('Error Updating products', error);
    }
  }

  // *****CUSTOMERS TOTAL PRODUCTS*******

  const newarr = count.map((e) => {
    return e.price;
  })
  let TotalPrice = newarr.reduce((acc, currentValue) => acc + parseInt(currentValue), 0);


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
      window.location.reload();
    } catch (error) {
      console.error('Error in deleting card', error);
    }
  }


  //*****************Submit Button************************ */

  const [cartData, setCartData] = useState([]);
  // console.log("cartData", cartData);
  const submitCart = () => {
    const newData = [];
    products.forEach((product) => {
      const { proName, TotalQuantity, price } = product;
      const cartItem = { proName, TotalQuantity, price };
      // console.log("cartItem", cartItem);
      newData.push(cartItem);
    });
    setCartData(newData);
  }


  // // ******************ConfirmOrder**********************//

  const [payload, setPayload] = useState([]);
  console.log("payload", payload);

  // const confirmOrder = () => {
  //   const newData = [];
  //   count.forEach((product) => {
  //     const { custId, proID, price, TotalQuantity } = product;
  //     const cartItem = { custId, proID, price, TotalQuantity };
  //     newData.push(cartItem);
  //   });
  //   setPayload(newData);
  // }

  const confirmOrder = () => {
    const newData = [];
    // console.log("newData", newData);
    count.forEach((product) => {
      const { custId, proID, price, TotalQuantity } = product;
      const cartItem = { custId, proID, price, TotalQuantity };
      newData.push(cartItem);
    });
    setPayload(newData);
  }

  useEffect(() => {
    const postDataToOrder = async () => {
      // console.log("misbah",payload);
      try {
        // console.log("misbah", payload);
        const res = await axios.post('http://localhost:3008/api/v1/order/createorder', payload);
        console.log("res", res);
        navigate('/order');
      } catch (error) {
        console.error('Error in sending Data to Order', error);
      }
    }
    if (payload.length > 0) {
      postDataToOrder();
    }
  }, [payload]);

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

      {/* style={{
            backgroundColor: hovered ? "rgb(184, 180, 169)" : "rgb(214, 210, 199)",
            color: hovered ? "white" : "yellow"
          }} */}

      {customer && (
        <>
          <Container className="mt-4">
            <h3 style={{ color: "black" }}> Your Shopping Cart!</h3>
            <Row>
              <Col xs={8}>
                <Container className="shadow mt-5 ">
                  {products.map((product, index) => (
                    <Row key={index} className="mb-3 p-2 shadow align-items-center g ">
                      <Col xs={2}>
                        <Image
                          style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "50%", // Rounded corners
                            overflow: "hidden" // Ensure the border-radius works as expected
                          }}
                          src={product.prodImages}
                          className="img-thumbnail"
                        />
                      </Col>

                      <Col xs={4}>
                        <p className="fw-bold mb-0 ">{product.proName}</p>
                        <p className=" mb-0" style={{ color: "red" }} >Rs.{product.price}</p>
                      </Col>

                      {/* <Col xs={4} className="text-end">
                      <Button
                        variant=""
                        onClick={() => handleMinusClick(index)}
                        style={{
                          backgroundColor: hovered ? "rgb(214, 210, 199)" : "rgb(184, 180, 169)",
                          color: hovered ? "white" : "grey",
                          borderRadius: "50%", // Rounded corners
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        -
                      </Button>
                      <span className="mx-2">{product.TotalQuantity}</span>
                      <Button
                        variant=""
                        onClick={() => handleAddClick(index)}
                        style={{
                          backgroundColor: hovered ? "rgb(214, 210, 199)" : "rgb(184, 180, 169)",
                          color: hovered ? "grey" : "white",
                          borderRadius: "50%", // Rounded corners
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        +
                      </Button>
                    </Col> */}

                      <Col xs={4} className="text-end">
                        <Button variant="" onClick={() => handleMinusClick(index)}
                          style={{
                            backgroundColor: hovered ? "rgb(214, 210, 199)" : "rgb(184, 180, 169)",
                            color: hovered ? "grey" : "white",
                            borderRadius: "50%",
                            overflow: "hidden"
                          }}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >-</Button>
                        <span className="mx-2">{product.TotalQuantity}</span>
                        <Button variant="" onClick={() => handleAddClick(index)}
                          style={{
                            backgroundColor: hovered ? "rgb(214, 210, 199)" : "rgb(184, 180, 169)",
                            color: hovered ? "grey" : "white",
                            borderRadius: "50%",
                            overflow: "hidden"
                          }}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >+</Button>
                      </Col>
                      <Col xs={2} className="text-center">
                        {/* Dustbin icon */}
                        <Trash2 onClick={() => deleteCustomerCart(product.custId, product.proID)} />
                      </Col>
                    </Row>
                  ))}
                </Container>
              </Col>

              {/************** CONFIRM ORDER********************/}

              {/* {cartData.length > 0 && (
              <Col xs={4} className="d-flex justify-content-end  " >
                <Container className=" mt-5 shadow " >
                  <h3 style={{ color: "darkgoldenrod" }} >Cart Details</h3>
                  <Card className='card-style border-0'>
                    {cartData.map((e, index) => (
                      <Card.Body key={index}>
                        <p style={{ fontWeight: "bold" }}>{e.proName} X {e.TotalQuantity} = {e.price} </p><hr />
                      </Card.Body>
                    ))}
                    <Button
                      style={{ backgroundColor: "darkgoldenrod" }}
                      variant=""
                      block
                      onClick={confirmOrder}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      Confirm Order
                    </Button>
                  </Card>

                </Container>

                <Button
                  variant=""
                  block
                  style={{ backgroundColor: "darkgoldenrod" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                </Button>

              </Col>
            )} */}

              {cartData.length > 0 && (
                <Col xs={4} className="d-flex justify-content-end">
                  <Container className="mt-1 shadow">
                    <h3 style={{ color: "darkgoldenrod" }}>Cart Details</h3><hr />
                    {/* darkslategray */}
                    <Card className='card-style border-0'>
                      {cartData.map((e, index) => (
                        <Card.Body key={index} style={{ height: "45px" }}>
                          <p style={{}}>{e.proName} X {e.TotalQuantity} = {e.price} </p>
                        </Card.Body>
                      ))}
                      <Card.Body style={
                        { display: "flex", justifyContent: "space-between", fontWeight: "bold" }
                      } >

                        <div>
                          Total
                        </div>
                        <div><p>Rs. {TotalPrice}</p></div>
                      </Card.Body>
                      <Button
                        style={{ backgroundColor: "darkgoldenrod" }}
                        variant=""
                        block
                        onClick={confirmOrder}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        Confirm Order
                      </Button>
                    </Card>
                  </Container>
                  <Button
                    variant=""
                    block
                    style={{ backgroundColor: "darkgoldenrod" }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                  </Button>
                </Col>
              )}

            </Row>
            <Row>
              <Col xs={5}>
                <Button
                  variant=""
                  onClick={submitCart}
                  style={{
                    display: cartData.length > 0 ? 'none' : 'block',
                    backgroundColor: "darkgoldenrod",
                    // backgroundColor: hovered ? "rgb(184, 180, 169)" : "rgb(214, 210, 199)",
                    color: hovered ? "white" : "black"
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Submit Cart!
                </Button>
              </Col>
            </Row>
          </Container>
          <Container className='mt-4'>
            <Link to={'/'}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ArrowLeft size={16} />
                <span style={{ marginLeft: '5px' }}>Back to Shop</span>
              </div>
            </Link>
          </Container>
        </>
      )}
    </>
  )
}

export default Cart;


