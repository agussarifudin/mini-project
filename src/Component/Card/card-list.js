import { Component, useEffect, useState } from "react";
import "./card-list.css";
import product from "../../Pages/ProductPage/product";
import { Row, Col, Card, Button } from "react-bootstrap";
import Data from "../../Helper/Api/data.json";
import category from "../Button/category";

const CardList = () => {
  const [cart, setCart] = useState([]);

  const handleClick = (Data) => {
    cart.push(Data);
    console.log(cart);
  };

  const [type, setType] = useState("Rucika");
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    type === "all"
      ? setFilteredProduct(Data)
      : setFilteredProduct(Data.filter((Data) => Data.type === type));
  }, [type]);

  const TagButton = () => {
    return <button>tesr</button>;
  };

  return (
    <div className="item">
      {filteredProduct.map((Data) => {
        const { name, type, id, price } = Data;

        return (
          <div className="kartu" key={Data.id}>
            <Row>
              <Col md={4} className="image m-6 ">
                <Card style={{ width: "14rem" }}>
                  <Card.Img
                    className="images "
                    variant="top"
                    src={require(`../../Asset/Images/${id}.jpg`)}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h1>{name}</h1>
                    </Card.Title>
                    <Card.Text>
                      <h2>{type}</h2>
                    </Card.Text>
                    <Button variant="primary" onClick={() => handleClick(Data)}>
                      ADD TO CART
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
