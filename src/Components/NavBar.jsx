import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = ({setSearch}) => {
    const cartItemsLength=useSelector((store)=>store.ecomReducer.cart.length)
    return (
        <div>
            <Link to="/" >myHome</Link>
            <input onChange={(e)=>setSearch(e.target.value)} type="text" />
            <button>Search</button>
            <Link to="cart">Cart:{cartItemsLength}</Link>
        </div>
    );
};

export default NavBar;