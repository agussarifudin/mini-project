import { Component } from "react";
import './category.css'

class Category extends Component{
   

    
    render(){

        function klik(){
            console.log('dsadsadsasd')
        }

        return(
            <div className="category">
            <button onClick={this.klik}><img 
                    className="img" 
                    src="https://www.rucika.co.id/wp-content/uploads/2020/07/Artikel-1a.jpg"
                    alt="tombol"
                    
                    /></button>
            <button onClick={this.klik}><img className="img" src="https://i2.wp.com/royalboard.co.id/wp-content/uploads/2022/03/Banner-Post-RB-Classic-Artikel-Maret-2022.jpg?fit=1080%2C750&ssl=1" /></button>
            <button onClick={this.klik}><img className="img" src="https://djabesmen.co.id/wp-content/uploads/2018/02/bannerwebrangkametal.jpg" onClick={this.klik}/></button>
            </div>
        )
    }
}


export default Category;