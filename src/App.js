import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Baitap1 from "./Bai-tap1";
// import Baitap2 from "./Bai-tap2";
import RenderingElement from "./rendering-elements";
import HandlingEvents from "./Handling-Events";
import ExampleHandlingEvent from "./Handling-Events/example";
import State from "./State";
import ListKeys from "./List-keys";
import Car from "./baiTapCar";
import BaitapList from "./BaiTap-MovieList";
// import MovieList from "./BaiTap-Movie";
function App() {
  return (
    <div>
      {/* <Baitap1 /> */}
      {/* <Baitap2 /> */}
      <RenderingElement />
      <hr></hr>
      <HandlingEvents />
      <hr></hr>
      <ExampleHandlingEvent />
      <hr></hr>
      <State />
      <hr></hr>
      <ListKeys />
      <hr></hr>
      <Car />
      <hr></hr>
      <BaitapList />
      <hr></hr>
    </div>
  );
}

export default App;
