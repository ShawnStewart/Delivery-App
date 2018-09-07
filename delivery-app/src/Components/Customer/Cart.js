import React, { Component } from "react";
import { Segment, List, Button, Icon } from "semantic-ui-react";
import update from "react-addons-update";

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

  // updateQuantity = (e, { quantity, key }) => {
  //   let newQuant = this.props.items.quantity + 1;
  //   this.props.setState({ quantity: newQuant });
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
                  <Segment floated="right">
                    <Button
                      circular
                      size="mini"
                      onClick={this.AddQuantityOnClick}
                    >
                      -
                    </Button>
                    1
                    <Button
                      circular
                      size="mini"
                      key={index}
                      onClick={this.updateQuantity}
                    >
                      +
                    </Button>
                  </Segment>
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
