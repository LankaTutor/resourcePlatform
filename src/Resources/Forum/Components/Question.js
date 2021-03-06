import React, { Component } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import { Carousel } from "react-bootstrap";
import "./Question.scss";
export default class Question extends Component {
  render() {
    return (
      <div className="card" style={{border:'none'}}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../../Images/ICT.jpg"
              alt="First slide"
              style={{height:'450px'}}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../../Images/chem2.jpg"
              alt="Third slide"
              style={{height:'450px'}}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../../Images/math.png"
              alt="Third slide"
              style={{height:'450px'}}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../../Images/physics2.jpg"
              alt="First slide"
              style={{height:'450px'}}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../../Images/Bio2.jpg"
              alt="Third slide"
              style={{height:'450px'}}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../../Images/Chem3.jpg"
              alt="Third slide"
              style={{height:'450px'}}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
