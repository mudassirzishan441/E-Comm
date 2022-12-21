import React, { useState } from 'react';
import Home from './Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import NavBar from './NavBar';

const Landing = () => {
    const [search,setSearch]=useState("");
    return (
        <div>
            <BrowserRouter>
            <NavBar setSearch={setSearch}/>
            <Routes>
                <Route path='/' element={<Home search={search}/>}/>
                <Route path='/details' element={<ProductDetails/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
            </BrowserRouter>
            {/* <h1>Landing Component</h1> */}
            
            
           
        </div>
    );
};

export default Landing;