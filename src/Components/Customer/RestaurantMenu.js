import React, { Component } from "react";
import { Segment, List, Grid, Button } from "semantic-ui-react";
import Cart from "./Cart";

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
      items: []
    };
  }

  handleAddToCart = (e, { name, price }) => {
    this.setState({
      items: this.state.items.concat({
        name,
        price
      })
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log(this.state.items);
  };

  render() {
    return (
      <Segment>
        <h1>{this.props.selectedRestaurant}</h1>
        <Grid>
          <Grid.Column width={12}>
            <List divided>
              {this.state.MenuItems.map((item, index) => {
                return (
                  <List.Item key={index}>
                    <List.Content>
                      <List.Header>{item.name}</List.Header>
                      {item.price}

                      <Button
                        floated="right"
                        name={item.name}
                        price={item.price}
                        onClick={this.handleAddToCart}
                        content="Add to cart"
                      />
                    </List.Content>
                  </List.Item>
                );
              })}
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Cart items={this.state.items} />
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}
