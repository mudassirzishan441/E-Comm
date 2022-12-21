import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetails = () => {
    const item = useSelector((state)=>state.ecomReducer.selectedItem);
    const dispatch=useDispatch();
    return (
        <div>
            <h1>Product Details</h1>
            <div style={{display:"flex" , flexWrap:"wrap"}}>
                <div style={{width:"50%"}}>
                    <img height="600px" width="100%" src={item.image} alt="" />
                </div>
                <div style={{width:"50%"}}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <h2>${item.price}</h2>
                    <p><b>Category:</b>{item.category}</p>
                    <p>Rating:{item.rating.rate} Count:{item.rating.count}</p>
                    <button onClick={()=>dispatch({type:"ADD_TO_CART",data:item})}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;