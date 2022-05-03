import React from "react"
import { Carousel } from "react-bootstrap";
import './carousel.css';

function carousel(){
return (
    <Carousel variant="dark" className="Carousel">
  <Carousel.Item>
    <img
      className="image1"
    //   style={{height:500}}
      src="https://www.rucika.co.id/wp-content/uploads/2020/07/Artikel-1a.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image2"
    //   style={{height:500}}
      src="https://djabesmen.co.id/wp-content/uploads/2018/02/bannerwebrangkametal.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      {/* <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image3"
    //   style={{height:500}}
      src="https://i2.wp.com/royalboard.co.id/wp-content/uploads/2022/03/Banner-Post-RB-Classic-Artikel-Maret-2022.jpg?fit=1080%2C750&ssl=1"
      alt="Third slide"
    />
    <Carousel.Caption>
      {/* <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default carousel