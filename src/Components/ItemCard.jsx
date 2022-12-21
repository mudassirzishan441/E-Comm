import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ItemCard = ({btnName,item,handleCart}) => {

    const dispatch=useDispatch();

    
    return (
        <div style={{width:"23%"}}>
            <img src={item.image} alt="" height="200px"  width="250px"/>
            <p>{item.title.slice(0,15)+"..."}</p>
            <h5>${item.price}</h5>
            <button onClick={()=>handleCart(item)}>{btnName}</button>
               
            <Link to="/details"><button onClick={()=>dispatch({type:"SELECTED_ITEM",data:item})}>View Details</button></Link>
        </div>
    );
};

export default ItemCard;