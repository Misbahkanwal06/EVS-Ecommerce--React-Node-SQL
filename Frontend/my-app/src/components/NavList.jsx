import React from 'react'

import { Container, Row, Col, Image, Form } from "react-bootstrap";

function NavList() {

    return (
        <div>

            <Container className=' mt-4  bg-success ' >
                <Row>
                    <Col xs="auto" className='d-flex'>
                        <span className="usp-icon">
                            <img
                                src="//icms-image.slatic.net/images/ims-web/55c642f0-250b-4515-9c8a-42cce3327098.png"
                            // alt=""
                            />
                        </span>

                        <p>Safe Payment</p>
                    </Col>
                    <Col xs="auto" className='d-flex'>
                        <span className="usp-icon ">
                            <img
                                src="//icms-image.slatic.net/images/ims-web/1b7e5ccb-89fc-4383-bc27-4586e82195be.png"
                                alt=""
                            />
                        </span>
                        <p>Nationwide delivery</p>
                    </Col>
                    <Col xs="auto" className='d-flex'>
                        <span className="usp-icon">
                            <img
                                src="//icms-image.slatic.net/images/ims-web/f2a7f550-3a25-478d-9879-e6aa419c7ebf.png"
                                alt=""
                            />
                        </span>
                        <p>Free and Easy Returns</p>
                    </Col>
                    <Col xs="auto" className='d-flex'>
                        <span className="usp-icon">
                            <img
                                src="//icms-image.slatic.net/images/ims-web/05352646-9b19-4283-a7b1-dcb16736663e.png"
                                alt=""
                            />
                        </span>

                        <p>Best Price Guaranteed</p>
                    </Col>
                    <Col xs="auto" className='d-flex'>
                        <span className="usp-icon">
                            <img
                                src="//icms-image.slatic.net/images/ims-web/781b5194-65f0-4ae5-b7a6-003bc717054f.png"
                                alt=""
                            />
                        </span>

                        <p>100% Authentic Products</p>
                    </Col>
                    {/* <Col xs="auto">
                    <span className="usp-icon">
  <img
    src="//icms-image.slatic.net/images/ims-web/8faa565d-b52d-4e05-90e4-38466e764e84.png"
    alt=""
  />
</span>
                        <p>Daraz Verified</p>
                    </Col> */}
                </Row>

            </Container>
        </div>
    )
}

export default NavList;

// {/* <Form inline >
//     <Row className=''>
//         <Col xs="auto">
//             <Form.Control
//                 type="text"
//                 placeholder="Search"
//                 className=" mr-sm-2"
//             />
//         </Col>
//         {/* <Col xs="auto">
//                                     <div className="logged-in-wrap">
//                                         <img
//                                             className="profile-img"
//                                             id="userImg"
//                                             src="//img.alicdn.com/imgextra/i1/O1CN013ue9Hm1FjZzC0ri2a_!!6000000000523-2-tps-32-32.png"
//                                             alt=""
//                                         />
//                                     </div>
//                                 </Col> */}

//         <Col xs="auto">

//             <img
//                 className="profile-img"
//                 id="userImg"
//                 src="//img.alicdn.com/imgextra/i1/O1CN013ue9Hm1FjZzC0ri2a_!!6000000000523-2-tps-32-32.png"
//                 alt=""
//             />
//             <Button variant="outline-light" id="button-addon2" style={{ border: "0px" }}>
//                 login
//             </Button>
//         </Col>
//         <Col>
//             <li className=" text-light ">|</li>

//         </Col>
//         <Col xs="auto">
//             <Button variant="outline-light" id="button-addon2" style={{ border: "0px" }}>
//                 Signup
//             </Button>
//         </Col>


//         <Col xs="auto">
//             {/* <Image
//                                         src={''}> */}
//             <span className="cart-icon">
//                 <svg
//                     width={30}
//                     height={30}
//                     viewBox="0 0 32 32"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     data-spm-anchor-id="a2a0e.home.dcart.i0.60674076s78Kco"
//                 >
//                     <path
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         d="M4.51345 5H1.33325V3H6.15306L7.21972 8.33333H30.5315L27.5012 25H8.51345L4.51345 5ZM7.61972 10.3333L10.1531 23H25.832L28.135 10.3333H7.61972Z"
//                         fill="white"
//                     />
//                     <path
//                         d="M11.9999 28C11.9999 28.7364 11.403 29.3333 10.6666 29.3333C9.93021 29.3333 9.33325 28.7364 9.33325 28C9.33325 27.2636 9.93021 26.6667 10.6666 26.6667C11.403 26.6667 11.9999 27.2636 11.9999 28Z"
//                         fill="white"
//                     />
//                     <path
//                         d="M25.3333 29.3333C26.0696 29.3333 26.6666 28.7364 26.6666 28C26.6666 27.2636 26.0696 26.6667 25.3333 26.6667C24.5969 26.6667 23.9999 27.2636 23.9999 28C23.9999 28.7364 24.5969 29.3333 25.3333 29.3333Z"
//                         fill="white"
//                     />
//                 </svg>
//             </span>

//             {/* </Image> */}
//         </Col>
//     </Row>
// </Form> */}