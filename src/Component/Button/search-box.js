import { Component } from "react";
import './Search.css'

class SearchBox extends Component{
    render(){
        return(
            <input 
            className={this.props.className}
            type="text" 
            placeholder={this.props.placeholder}
            onChange={this.props.onChangeHandler}/>
        )
    }
}


export default SearchBox;