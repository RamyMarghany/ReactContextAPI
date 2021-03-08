import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
// import productReducer from './store/reducers/products';

import ProductProvider from "./context/product-context";

// const rootReducer = combineReducers({
//   shop: productReducer
// });

// const store = createStore(rootReducer);

// All commented lines were using for react-redux and now we replace with react-hook (useContext) approach

ReactDOM.render(
  <ProductProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductProvider>,
  document.getElementById("root")
);
