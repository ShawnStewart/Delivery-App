import React, { Component } from "react";
import {
  Segment,
  List,
  Grid,
  Radio,
  Input,
  Button,
  Container
} from "semantic-ui-react";

export default class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [
        {
          name: "Beef Stew",
          price: 8.99,
          quanitity: 1
        },
        {
          name: "Pizza",
          price: 11.99,
          quanitity: 2
        },
        {
          name: "Steak",
          price: 17.99,
          quanitity: 3
        },
        {
          name: "Hot Wings",
          price: 10.99,
          quanitity: 2
        },
        {
          name: "Cheese Burger",
          price: 8.99,
          quanitity: 1
        },
        {
          name: "Catfish",
          price: 12.99,
          quanitity: 3
        }
      ],
      subtotal: null,
      tax: null,
      tip: 0.0,
      total: null,
      value: null //Time to place order
    };
  }

  CalculateTotals = () => {
    let subtotal = 0;
    let tax = 0;
    let total = 0;

    this.state.cartItems.forEach(item => {
      subtotal += item.price * item.quanitity;
    });
    this.setState({ subtotal: parseFloat(subtotal).toFixed(2) });

    tax = parseFloat(total) * 0.0469;
    this.setState({ tax: parseFloat(tax).toFixed(2) });
    total = subtotal + tax;
    this.setState({ total });
  };

  handleDeliveryTime = (e, { value }) => {
    this.setState({ deliveryTime: true });
  };

  handleTime = (e, { value }) => this.setState({ value });

  handleTip = (e, { value }) => {
    console.log("handletip", value);
    this.setState({ tip: this.state.subtotal * value });
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment.Group>
            <Segment>
              <h1 className="ui center aligned grid">Restaurant Name</h1>
            </Segment>
            <Segment>
              <List divided relaxed>
                {this.state.cartItems.map((item, index) => {
                  let total = null;
                  return (
                    <List.Item key={index}>
                      <List.Header>{item.name}</List.Header>
                      Quanitity: {item.quanitity}
                      <List.Content floated="right">
                        ${item.price * item.quanitity}
                      </List.Content>
                    </List.Item>
                  );
                })}
              </List>
            </Segment>
            <Segment.Group>
              <Segment>Subtotal: ${this.state.subtotal}</Segment>
              <Segment>Tax: ${this.state.tax} </Segment>
              <Segment>
                Tip:
                <Button content="10%" value="0.1" onClick={this.handleTip} />
                <Button content="15%" value="0.15" onClick={this.handleTip} />
                <Button content="20%" value="0.2" onClick={this.handleTip} />
                <div floated="right">${this.state.tip}</div>
              </Segment>
              <Segment>Total: {this.state.total} </Segment>
            </Segment.Group>
          </Segment.Group>
        </Grid.Column>
        <Grid.Column width={6}>
          <Segment.Group>
            <Segment>
              <h1 className="ui center aligned grid">
                Review Customer Information
              </h1>
            </Segment>
            <Segment>Restaurant Name</Segment>
            <Segment>
              Delivery Address:
              <br /> 1701 Lois ave apt 7<br />
              Tampa, Florida, 32104
              <br />
            </Segment>
            <Segment>
              Order Time: {this.state.value}
              <br />
              <Radio
                label="Now"
                name="radioGroup"
                value="Now"
                checked={this.state.value === "Now"}
                onChange={this.handleTime}
              />
              <Radio
                label="Later"
                name="radioGroup"
                value="Later"
                checked={this.state.value === "Later"}
                onChange={this.handleTime}
              />
              {this.state.value === "Later" ? (
                <Input placeholder="Enter a time" />
              ) : null}
            </Segment>
            <Segment>
              Payment option: <br />
              XXXX-XXXX-XXXX-0897
              <br />
              <Button content="Change payment option" />
            </Segment>
            <Segment>
              <Button content="Place Order" />
            </Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid>
    );
  }
}
