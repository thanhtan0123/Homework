import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import WhatWeDo from "./whatWeDo";
import Contact from "./contact";
import ListCard from "./listCard";
import Footer from "./footer";
export default function Baitap2() {
  return (
    <div>
      <Header />
      <Carousel />
      <div className="container">
        <div className="row info">
          <WhatWeDo />

          <Contact />
        </div>
        <ListCard />
      </div>

      <Footer />
    </div>
  );
}
