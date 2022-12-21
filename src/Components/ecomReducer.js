const initialState={
    allProducts:[],
    cart:[],
    selectedItem:{}

}

export const ecomReducer=(state=initialState,action)=>{
    if(action.type === "ALL_PRODUCTS"){
        return{...state,allProducts:action.type};
    }
    if(action.type === "ADD_TO_CART"){
        return{...state,cart:[...state.cart,{...action.data,key:state.cart.length}]};
    }
    if(action.type === "SELECTED_ITEM"){
        return {...state,selectedItem:action.data}
    }
    if(action.type==="REMOVE_ITEM"){
        const newCartItems=state.cart.filter((item)=>item.key!==action.data.key)
        return {...state,cart:newCartItems}
    }
    return state;
}