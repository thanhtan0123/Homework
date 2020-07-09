import React, { Component } from "react";

export default class ListKeys extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listProduct: [
        {
          id: 1,
          name: "Iphone X",
          price: 100000,
        },
        {
          id: 2,
          name: "Iphone XX",
          price: 100000,
        },
        {
          id: 3,
          name: "Iphone XXX",
          price: 100000,
        },
        {
          id: 4,
          name: "Iphone XXXX",
          price: 100000,
        },
      ],
    };
  }
  renderTable = () => {
    const { listProduct } = this.state;
    return listProduct.map((product) => {
      return (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <h3 className="title text-center">Lists-Keys</h3>
        <table className="table text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
