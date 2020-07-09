import React, { Component } from "react";

export default class HandlingEvents extends Component {
  handleOnclick = () => {
    console.log("12523");
  };

  handleParams = (name, age) => {
    console.log("Hello " + name + age + "Tuoi");
  };
  render() {
    return (
      <div>
        <h3 className="title">Handling Events</h3>
        <button className="btn btn-primary" onClick={this.handleOnclick}>
          Handling Events
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            this.handleParams("Thanh Tan ", "15");
          }}
        >
          Handling Events params
        </button>
      </div>
    );
  }
}
