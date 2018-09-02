import React, { Component } from "react";
import { Segment, List, SegmentGroup } from "semantic-ui-react";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null
    };
  }

  CalculateTotal = () => {
    let total = 0;
    this.props.items.forEach(item => {
      total += item.price;
    });
    this.setState({ total: parseFloat(total).toFixed(2) });
  };

  // CalculateTax = total => {
  //   let tax = parseFloat(total) * 0.0469;
  //   this.setState({ tax: parseFloat(tax).toFixed(2) });
  // };

  // CalculateSubtotal = (tax, total) => {
  //   let subtotal = tax + total;
  //   this.setState({ subtotal });
  // };

  // componentWillReceiveProps = nextProps => {
  //   if (this.props.items !== nextProps.items) {
  //     this.CalculateTotal();
  //     // this.CalculateTax(this.state.total);
  //     // this.CalculateSubtotal(this.state.tax, this.state.total);
  //   }
  // };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.props !== prevProps) {
      this.CalculateTotal();
    }
  };

  render() {
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
        <Segment>Total: {this.state.total}</Segment>
      </Segment>
    );
  }
}
