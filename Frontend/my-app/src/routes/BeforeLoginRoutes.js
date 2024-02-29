
import React from 'react';
import { Route, Routes as DefaultAppRoutes } from 'react-router-dom';

import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Login from '../pages/Login';
// import View from '../pages/View';

const BeforeLoginRoutes = () => {
    
    console.log("before login routes");
    return (
        <div>
            <DefaultAppRoutes>
                <Route path='/' element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route  path="/login" element={<Login />}/>
                {/* <Route path='/students/create' element={<Sign />} /> */}
                {/* <Route path='/students/view-all'element={<View/>}/> */}
            </DefaultAppRoutes>
        </div>
    )
}
export default BeforeLoginRoutes;
