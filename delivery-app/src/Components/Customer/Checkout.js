import React, { Component } from "react";
import {
  Segment,
  List,
  Grid,
  Radio,
  Input,
  Button,
  Container,
  Icon
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
  // totals
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
        {/* cart and total */}
        <Grid.Column width={10}>
          <Segment>
            <Segment.Group>
              <Segment inverted padded color="blue">
                <h1 className="ui center aligned grid">Restaurant Name</h1>
              </Segment>
              <Segment
                className="ui center aligned grid"
                color="blue"
                padded
                inverted
              >
                <Icon circular className="black" name="food" size="huge" />
              </Segment>
            </Segment.Group>
            <Segment color="black">
              <List divided relaxed>
                {this.state.cartItems.map((item, index) => {
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
              <Segment color="black">Subtotal: ${this.state.subtotal}</Segment>
              <Segment>Tax: ${this.state.tax} </Segment>
              <Segment>
                Tip:
                <Button content="10%" value="0.1" onClick={this.handleTip} />
                <Button content="15%" value="0.15" onClick={this.handleTip} />
                <Button content="20%" value="0.2" onClick={this.handleTip} />
                <Container textAlign="right">${this.state.tip}</Container>
              </Segment>
            </Segment.Group>
            <Segment color="black">
              Total:
              {this.state.total}
            </Segment>
          </Segment>
        </Grid.Column>

        {/*review customer info  */}
        <Grid.Column width={6}>
          <Segment.Group>
            <Segment inverted padded="very" color="blue">
              <h2 className="ui center aligned grid">
                Review Customer Information
              </h2>
            </Segment>
            <Segment color="black">
              <Segment padded color="black">
                Restaurant Name
              </Segment>
              <Segment padded color="black">
                Delivery Address:
                <br /> 1701 Lois ave apt 7<br />
                Tampa, Florida, 32104
                <br />
                <Button
                  icon="cog"
                  color="blue"
                  content="Change delivery address"
                />
              </Segment>
              <Segment padded color="black">
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
              <Segment padded color="black">
                Payment option: <br />
                XXXX-XXXX-XXXX-0897
                <br />
                <Button
                  icon="cog"
                  color="blue"
                  content="Change payment option"
                />
              </Segment>
            </Segment>
            <Segment>
              <Button animated="vertical" color="green">
                <Button.Content hidden>
                  <Icon name="shop" />
                </Button.Content>
                <Button.Content visible>Place order</Button.Content>
              </Button>
            </Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid>
    );
  }
}
