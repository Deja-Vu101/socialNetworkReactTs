//import ReactDOM from "react-dom/client";
//import "./index.scss";
//import App from "./App";
//import { BrowserRouter } from "react-router-dom";
//import { Provider } from "react-redux";

//const root = ReactDOM.createRoot(
//  document.getElementById("root") as HTMLElement
//);
//root.render(
//  <BrowserRouter>
//    <Provider>
//      <App />
//    </Provider>
//  </BrowserRouter>
//);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
