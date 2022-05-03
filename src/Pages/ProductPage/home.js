import { Component, useState } from "react";
import Carousel from "../../Component/Carousel/carousel.js";
import React from "react";
import Product from "./product.js";
import product from "./product.js";
import CardList from "../../Component/Card/card-list.js";
import SearchBox from "../../Component/Button/search-box.js";
import Category from "../../Component/Button/category.js";
import Navbar from "../../Component/Button/navbar.js";
import { Link } from "react-router-dom";
// import Dataproduct from '../../Helper/api/data-product.js';

import { BrowserRouter } from "react-router-dom";
import { Card } from "react-bootstrap";
import Data from "../../Helper/Api/data.json";

class home extends Component {
  constructor() {
    super();

    this.state = {
      product: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typ..code.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { product: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    console.log(event.target.value);

    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { product, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredProduct = Data.filter((Data) => {
      return Data.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="search">
        <Navbar />
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search product.."
          className="search-box"
        />
        <Carousel />
        <Category />
        <CardList Data={filteredProduct} />

        {/* {
            Data.map((Data)=>{
                return(
                    <div key={Data.id}>
                        <h2>{Data.price}</h2>
                        </div>
                )
            })
        } */}
      </div>
    );
  }
}

export default home;
