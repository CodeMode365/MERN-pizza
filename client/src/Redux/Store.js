import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
// import { getAllPizzas } from "./Reducers/Opeartions";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzas } from "./Reducers/Opeartions";

const finalReducer = combineReducers({
  getAllPizzas: getAllPizzas,
});
const initialState = {};
const composeEnhancer = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
