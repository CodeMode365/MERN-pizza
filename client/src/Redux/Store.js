import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
// import { getAllPizzas } from "./Reducers/Opeartions";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzas } from "./Reducers/DbOpeartions";
import { Cart } from "./Reducers/CartOperation";

const finalReducer = combineReducers({
  getAllPizzas: getAllPizzas,
  Cart: Cart,
});

//check cart data in localStorage
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
//Initialize the localStorages
const initialState = {
  Cart: {
    cartItems: cartItems,
  }
};
const composeEnhancer = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
