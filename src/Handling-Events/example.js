import React, { Component } from "react";

export default class ExampleHandlingEvent extends Component {
  isLogin = false;
  userName = "Thanh Tan";
  //   clickLogin = () => {
  //     return <button className="btn btn-info">Login</button>;
  //   };
  //   userName = () => {
  //     return <p>Hello TTT</p>;
  //   };

  renderHTML = () => {
    return (
      <div>
        {this.isLogin ? (
          <p>Hello {this.userName}</p>
        ) : (
          <button className="btn btn-info" onClick={this.clickLogin}>
            Login
          </button>
        )}
      </div>
    );
  };
  clickLogin = () => {
    this.isLogin = true;
  };
  render() {
    return (
      <div>
        <h3 className="title">Example Handling Event</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
