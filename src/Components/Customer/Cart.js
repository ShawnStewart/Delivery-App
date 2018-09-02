import React, { Component } from "react";
import { Segment, List } from "semantic-ui-react";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  CalculateTotal = () => {
    let total = 0;
    this.props.items.forEach(item => {
      total += item.price;
    });
    return parseFloat(total).toFixed(2);
  };

  render() {
    console.log("PROPS", this.props);
    return (
      <Segment>
        <h1>Cart</h1>
        <List divided relaxed>
          {this.props.items.map((item, index) => {
            return (
              <List.Item key={index}>
                <List.Content>
                  <List.Header>{item.name}</List.Header>
                  {item.price}
                </List.Content>
              </List.Item>
            );
          })}
        </List>
        <Segment>{this.CalculateTotal()}</Segment>
      </Segment>
    );
  }
}
