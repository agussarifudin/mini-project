import { Component } from "react";
import './card-list.css'
import product from "../../Pages/ProductPage/product";

class CardList extends Component{
    render(){
        
        const { product }= this.props;
        
        return (
            
            <div>
                {product.map((product)=>{
                    
                    const { name , email , id}= product;
                    return (
                    <div className="card-container" key={product.id}>
                    <img alt={`product ${name} ${email}`}  src={`https://robohash.org/${id}?set=set2&size=180x180`} /> 
                        <div className="h2">
                            <h2>{name}</h2>
                            <h2>{email}</h2>
                        </div>
                    </div>
                )})}
            </div>
          
        )
    }
}


export default CardList;