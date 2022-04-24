import React, { Component } from 'react'
import data from '../../Asset/images/data';

class dataproduct extends Component {

constructor(){
    super();

    this.state ={
        product:[],
    }

}



componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>this.setState(()=>{
        return{dataproduct:users}
    },
    ()=>{
        console.log(this.state)
    }
    ))
}

render(){
    return(
        <div className='dataproduct'>
             {this.state.product.map((dataproduct)=>{
        return(
            <div key={dataproduct.id}>
                <h1>{dataproduct.name}</h1>

            </div>
        )
    })}
        </div>
    )
}


   
}

export default dataproduct;