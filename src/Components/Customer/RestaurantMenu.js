import React, { Component } from "react";

export default class RestaurantMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <div>{this.props.selectedRestaurant}</div>;
  }
}
