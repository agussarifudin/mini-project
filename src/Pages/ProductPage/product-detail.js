import React, { Component, Fragment } from 'react'
import { findAllInRenderedTree } from 'react-dom/test-utils'
import Navbar from '../../Component/Button/navbar.js'
import './product-detail.css'
import Cardrucika from '../../Component/Card/card-rucika.js'

class Product extends Component{

state ={
  order:4
}



  render(){
    
    return(
    <div className='product'>
      <Navbar/>
    
      <div className='header'>
        <div className='logo'>
         
        </div>
        <div className='troley'>
     
          <div className='count'>Jumlah Order = {this.state.order}</div>
        </div>
      </div>

      <Cardrucika />
      

    </div>
      
    )
  }
} 

export default Product;