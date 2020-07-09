import React, { Component } from "react";

export default class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "./img/imgRedCar.jpg",
    };
  }
  clickChangeColor = (color) => {
    this.setState({
      img: `img/${color}`,
    });
  };
  render() {
    return (
      <div className="container">
        <h3 className="title text-center">Change Color</h3>
        <div className="row">
          <div className="col-6">
            <img src={this.state.img} className="img-fluid" />
          </div>
          <div className="col-6">
            <button
              className="btn btn-danger m-4"
              onClick={() => {
                this.clickChangeColor("imgRedCar.jpg");
              }}
            >
              Red
            </button>
            <button
              className="btn btn-light m-4"
              onClick={() => {
                this.clickChangeColor("imgSilverCar.jpg");
              }}
            >
              Silver
            </button>
            <button
              className="btn btn-dark m-4"
              onClick={() => {
                this.clickChangeColor("imgBlackCar.jpg");
              }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    );
  }
}
