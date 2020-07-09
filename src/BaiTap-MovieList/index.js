import React, { Component } from "react";
import data from "./data.json";
export default class BaitapList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMovie: data,
    };
    console.log(this.state.listMovie);
  }
  renderCard = () => {
    const { listMovie } = this.state;
    return listMovie.map((movie) => {
      return (
        <div className="col mb-4" key={movie.maPhim}>
          <div className="card ">
            <img
              src={movie.hinhAnh}
              className="card-img-top card-img"
              alt="Movie"
            />
            <div className="card-body">
              <h5 className="card-title">{movie.tenPhim}</h5>
              <p className="card-text movie-description">{movie.moTa}</p>
              <a href="#s" className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3 className="title text-center">Bai Tap Movie List</h3>
        <div className="row row-cols-1 row-cols-md-3">{this.renderCard()}</div>
      </div>
    );
  }
}
