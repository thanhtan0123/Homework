import React, { Component } from "react";

export default class State extends Component {
  //   isLogin = false;
  //   userName = "Thanh Tan";
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      username: "Thanh Tan",
    };
  }
  renderHTML = () => {
    return (
      <div>
        {this.state.isLogin ? (
          <p>Hello {this.state.username}</p>
        ) : (
          <button className="btn btn-info" onClick={this.clickLogin}>
            Login
          </button>
        )}
      </div>
    );
  };
  clickLogin = () => {
    this.setState({
      isLogin: true,
    });
    // this.state.isLogin = true;
  };
  render() {
    return (
      <div>
        <h3 className="title bg-dark text-center">State</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
