import React, { Component } from "react";

export default class RenderingElement extends Component {
  username = "Thanh Tan";
  lop = "FE 42";
  renderInfo = () => {
    return (
      <p>
        Username: {this.username}--Lop: {this.lop}
      </p>
    );
  };
  render() {
    return (
      <div>
        <h3>RenderingElement</h3>
        {/* <p>Username: {this.username}</p>
        <p>Lop: {this.lop}</p> */}
        {this.renderInfo()}
      </div>
    );
  }
}
