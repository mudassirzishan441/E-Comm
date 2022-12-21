import axios from 'axios';
import React, {  useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ItemCard from './ItemCard';


const Home = ({search}) => {
    const [products,setProducts]=useState([]);
    const [allData,setAllData]=useState([]);
    const [count,setCount]=useState(0);
    const dispatch=useDispatch();

        const getAllProducts=async()=>{
        const result=await axios.get(`https://fakestoreapi.com/products`);
        setProducts(result.data);
        setAllData(result.data)
        dispatch({type:"ALL_PRODUCTS",data:result.data})
    };

   useEffect(()=>{
        getAllProducts()
    },[])
    useEffect(()=>{
        const filteredCartItems= allData.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()))
        setProducts(filteredCartItems)
    },[search]);

        const handleCartItems=(item)=>{
            dispatch({type:"ADD_TO_CART",data:item});
        };

        const handleCategories=(category)=>{
            if(category){
                const selectedCategory = allData.filter((item)=>item.category === category);
                setProducts(selectedCategory);
            }else{
                setProducts(allData);
            }
        };

        const handleSorting=(sortBy)=>{
            if (sortBy === "asc"){
                const sorted = products.sort((a,b)=>(a.price > b.price ? 1 :-1 ));
                setProducts(sorted);
            }
            if (sortBy === "dsc"){
                const sorted = products.sort((a,b)=>(a.price > b.price ? -1 :1 ));
                setProducts(sorted);
            }
            if (sortBy === "cls"){
                const sorted = products.sort((a,b)=>(a.id > b.id ? 1 : -1 ));
                setProducts(sorted);
            }
           setCount(count +1)
        }

    return (
        <div>
            <h1>Home Component</h1>
            <div style={{height:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <ButtonGroup aria-label="Basic example">
             <Button onClick={()=>handleCategories()} variant="secondary">All</Button>
            <Button onClick={()=>handleCategories("men's clothing")} variant="secondary">Men</Button>
            <Button onClick={()=>handleCategories("women's clothing")} variant="secondary">Women</Button>
            <Button onClick={()=>handleCategories("electronics")} variant="secondary">Electronics</Button>
            <Button onClick={()=>handleCategories("jewelery")} variant="secondary">Jewelery</Button>
            </ButtonGroup>
            <ButtonGroup aria-label="Basic example">
            <Button onClick={()=>handleSorting("asc")} variant="secondary">Price Low To High</Button>
            <Button onClick={()=>handleSorting("dsc")} variant="secondary">Price High To Low</Button>
            <Button onClick={()=>handleSorting("cls")} variant="secondary">Clear</Button>
            </ButtonGroup>

            </div>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
                {products.map((item,index)=>{
                    return(
                        <ItemCard key={index} btnName="Add To Cart"  item={item} handleCart={handleCartItems}/>
                    )
                })}
            </div>
        </div>
    );
};

export default Home;


