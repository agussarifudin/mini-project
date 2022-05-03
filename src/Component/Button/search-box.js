import { Component } from "react";
import './Search.css'

class SearchBox extends Component{
    render(){
        return(
            <div className="search mb-2">
            <input 
            className={this.props.className}
            type="text" 
            placeholder={this.props.placeholder}
            onChange={this.props.onChangeHandler}/>
            </div>
        )
    }
}


export default SearchBox;