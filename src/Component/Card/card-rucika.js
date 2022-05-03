import React, { Component } from 'react'
import { findAllInRenderedTree } from 'react-dom/test-utils'



class Cardrucika extends Component{

state ={
  order:4
}



handlePlus=()=>{
  this.setState({
    order: this.state.order + 1
  })
  
}

handleMinus= ()=>{
  if(this.state.order > 0){
  this.setState({
    order : this.state.order - 1
  })}
}

  render(){
    
    return(
    <div className='product'>

  {/* <div className='header'>
        <div className='logo'>
          <img src='https://www.rucika.co.id/wp-content/uploads/2020/07/Artikel-1a.jpg'/>
        </div>
        <div className='troley'>
          <img src='https://www.rucika.co.id/wp-content/uploads/2020/07/Artikel-1a.jpg'/>
          <div className='count'></div>
        </div>
      </div> */}
      
      <div className='card'>
        <div className='img-thumb-prod'>
          <img src='https://www.rucika.co.id/wp-content/uploads/2020/07/Artikel-1a.jpg'/>
        </div>
        <p className='product-title'>RUCIKA</p>
        <p className='product-price'>Rp40.000</p>
        <div className='counter'>
          <button className='minus' onClick={this.handleMinus}>-</button>
          <input type="text" value={this.state.order}/>
          <button className='plus' onClick={this.handlePlus}>+</button>
        </div>
      </div>
      

    </div>
      
    )
  }
} 

export default Cardrucika;