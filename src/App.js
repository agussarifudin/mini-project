import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Pages/LoginPage/LoginForm.js';
import createUtilityClassName from 'react-bootstrap/esm/createUtilityClasses';


function App(){
  return (
    <main className="App">
    <Login/>
    </main>
  )
}

export default App;
