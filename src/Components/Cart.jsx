import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemCard from './ItemCard';

const Cart = () => {
    const cartItems=useSelector((state)=>state.ecomReducer.cart);
    const dispatch=useDispatch()
    const handleRemoveItem=(item)=>{
        dispatch({type:"REMOVE_ITEM",data:item})
    }
    return (
        <div>
            <h1>Cart</h1>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
                {cartItems.map((item,index)=>{
                    return <ItemCard key={index} btnName="remove" item={item} handleCart={handleRemoveItem}/>
                })}
            </div>
        </div>
    );
};

export default Cart;