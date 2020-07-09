import React, { Component } from "react";
import Header from "./header";
import Content from "./content";
import Sidebar from "./sidebar";
import Footer from "./footer.js";
export default class Baitap1 extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="contents">
          <Content />
          <Sidebar />
        </div>
        <Footer />
      </div>
    );
  }
}
// export default Baitap1;
