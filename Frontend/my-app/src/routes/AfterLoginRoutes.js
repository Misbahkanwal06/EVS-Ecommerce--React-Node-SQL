
import React from 'react';
import { Route, Routes as AfterRoutes } from 'react-router-dom';
import AddToCard from '../pages/AddToCard';  

const AfterLoginRoutes = () => {
    return (
        <div>
            <AfterRoutes>
                <Route path='/addtocart' element={<AddToCard/>} />
                <Route path='/order' element={<Orders/>}/>
                {/* <Route path='*' element={<NotAllowed />} /> */}
            </AfterRoutes>
        </div>
    )
}
export default AfterLoginRoutes;

