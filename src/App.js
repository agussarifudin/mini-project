import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import createUtilityClassName from 'react-bootstrap/esm/createUtilityClasses';
import Home from './Pages/ProductPage/home'
import Detail from './Pages/ProductPage/product-detail'
import Login from './Pages/LoginPage/LoginForm'
import Cart from './Pages/ProductPage/cart'
import Checkout from './Pages/ProductPage/checkout'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';


function App(){
  return (
    
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="home" element={<Home />}/>
      <Route path="productdetail" element={<Detail/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="checkout" element={<Checkout/>}/>
    </Routes>
  
  )
}

export default App;
