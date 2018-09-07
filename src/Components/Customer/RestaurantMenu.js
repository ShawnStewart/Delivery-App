import React, { Component } from "react";
import { Segment, List, Grid, Button, Label, Icon } from "semantic-ui-react";

export default class RestaurantMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      MenuItems: [
        {
          name: "Beef Stew",
          price: 8.99
        },
        {
          name: "Pizza",
          price: 11.99
        },
        {
          name: "Steak",
          price: 17.99
        },
        {
          name: "Hot Wings",
          price: 10.99
        },
        {
          name: "Cheese Burger",
          price: 8.99
        },
        {
          name: "Catfish",
          price: 12.99
        }
      ],
      cart: [],
      total: null
    };
  }

  handleAddToCart = (e, { name, price }) => {
    this.setState({
      cart: this.state.cart.concat({
        name,
        price
      })
    });
    console.log("CART", this.state.cart);
  };

  CalculateTotal = () => {
    let total = 0;
    this.cart.map((item, index) => {
      total += item.price;
    });
    this.setState({ total: parseFloat(total).toFixed(2) });
  };

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (this.state != this.prevState) {
  //     this.CalculateTotal();
  //   }
  // };

  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Segment.Group>
              <Segment inverted padded color="blue">
                <h1 className="ui center aligned grid">
                  {this.props.selectedRestaurant}
                </h1>
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
              <List divided>
                {this.state.MenuItems.map((item, index) => {
                  return (
                    <List.Item key={index}>
                      <List.Content>
                        <List.Header>{item.name}</List.Header>
                        <List.Description>
                          Fresh, never frozen. Cooked to order.
                        </List.Description>
                        <Label color="teal" ribbon>
                          ${item.price}
                        </Label>

                        <Button
                          color="green"
                          animated="vertical"
                          floated="right"
                          name={item.name}
                          price={item.price}
                          onClick={this.handleAddToCart}
                        >
                          <Button.Content hidden>
                            <Icon name="shop" />
                          </Button.Content>
                          <Button.Content visible>Add to cart</Button.Content>
                        </Button>
                      </List.Content>
                    </List.Item>
                  );
                })}
              </List>
            </Segment>
          </Segment>
        </Grid.Column>

        {/* Cart */}
        <Grid.Column width={6}>
          <Segment>
            <Segment.Group>
              <Segment inverted padded color="blue">
                <h1 className="ui center aligned grid">Shopping Cart</h1>
              </Segment>
              <Segment
                className="ui center aligned grid"
                color="blue"
                padded
                inverted
              >
                <Icon circular className="black" name="cart" size="huge" />
              </Segment>
            </Segment.Group>

            <Segment color="black">
              <List divided relaxed>
                {this.state.cart.map((item, index) => {
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
            </Segment>
            <Segment color="black">Total: {this.state.total}</Segment>

            <Button color="green" animated="vertical">
              <Button.Content hidden>
                <Icon name="circle arrow right" />
              </Button.Content>
              <Button.Content visible>Checkout</Button.Content>
            </Button>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
