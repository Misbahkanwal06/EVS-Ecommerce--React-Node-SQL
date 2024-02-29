// import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Productss from './pages/Productss';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from './pages/Signup';
import Login from './pages/Login';
import AddToCard from './pages/AddToCard';
import Cart from './pages/Cart';

// import BeforeLoginRoutes from './routes/BeforeLoginRoutes';
// import AfterLoginRoutes from './routes/AfterLoginRoutes';

function App() {
  
  // const storageResponse = localStorage.getItem("userdata");
  // let customer = JSON.parse(storageResponse);
  // console.log("customer", customer);
  // if (!customer) return <BeforeLoginRoutes />;
  // else if (customer) return <AfterLoginRoutes />;
  // const [products, setProducts] = useState([]);
  // // console.log("products::",products);
  // products={products}

  // const [payload, setPayload] = useState({});
  // const handleSend = (payload)=>{
  //  console.log("in app ", payload);
  //  setPayload(payload);
  // }
  // send={handleSend}

  return (
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/products/:selectedProCatId' element={<Productss />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cart' element={<Cart/>}/>
      {/* <Route path='/addtocart' element={<AddToCard  payloads={payload}/>}/> */}
      {/* <Route path='/products' element={<Productss/>}/> */}
      {/* <Route path='/products' element={<Productss products={products} selectedProCatId={selectedProCatId} />} /> */}
      {/* <Route  element={< ProCategories setProducts={setProducts} />} /> */}
    </Routes>
  );
}
export default App;


