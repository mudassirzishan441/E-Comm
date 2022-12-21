import { legacy_createStore,combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ecomReducer } from "./ecomReducer";


export const newStore=()=>{
    return legacy_createStore(combineReducers({ecomReducer}),composeWithDevTools())
}