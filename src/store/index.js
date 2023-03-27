import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { categoryReducer, productReducer, cartReducer, ordersReducer, authReducer } from './reducers';
import {locationReducer} from './reducers'
import { configureStore } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  category: categoryReducer,
  orders: ordersReducer,
  auth: authReducer,
  location: locationReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));