import {Component} from 'react';
import Carousel from '../../Component/Carousel/carousel.js';
import React from 'react';
import Product from './product.js';
import product from './product.js';
import CardList from '../../Component/Card/card-list.js';
import SearchBox from '../../Component/Button/search-box.js';
import Category from '../../Component/Button/category.js';
// import Dataproduct from '../../Helper/api/data-product.js';
import data from '../../Asset/images/data.js';



class home extends Component{

constructor(){
    
    super();

    this.state ={
        product:[],
        searchField:''
    }

}


componentDidMount(){
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>this.setState(()=>{
        return{product:users}
    },
    ()=>{
        console.log(this.state)
    }
    ))
    
}




onSearchChange = (event)=>{
    console.log(event.target.value);

    const searchField= event.target.value.toLocaleLowerCase();

   

    this.setState(()=>{  
        return {searchField};
    })
}


   





render(){
    

    const { product , searchField}= this.state;
    const {onSearchChange} = this;

    const filteredProduct = product.filter((product)=>{
        return product.name.toLocaleLowerCase().includes(searchField);
    });

    

    
    return(
   
    <div className='search'>
       
    <SearchBox 
    onChangeHandler={onSearchChange} 
    placeholder='Search product..'
    className='search-box'
    />
    <Carousel/>
    <Category />
    <CardList product={filteredProduct}/>


    </div>
    )   
    }
}


export default home