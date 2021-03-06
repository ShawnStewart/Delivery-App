import React, { Component } from "react";
import { Segment, Button, Icon, List } from "semantic-ui-react";
import { RESTAURANT_SELECTED } from "../../Actions/Types";
import { connect } from "react-redux";
import "./Customer.css";

export default class OrderNow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRestaurant: "",
      restaurants: [
        {
          name: "Subway"
        },
        {
          name: "Addison's"
        },
        {
          name: "Shakespeare's Pizza"
        },
        {
          name: "Main Squeeze Cafe"
        },
        {
          name: "Chinese Wok Express"
        },
        {
          name: "Broadway Diner"
        },
        {
          name: "McNally's"
        },
        {
          name: "Wise Guys"
        },
        {
          name: "Room 38 Lounge"
        }
      ]
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.setState({ selectedRestaurant: e.target.value });
    console.log("state", this.state);
    const selectedRestaurant = this.state.selectedRestaurant;
    // dispatch({ type: RESTAURANT_SELECTED, payload: selectedRestaurant });
    this.props.history.push("/delivery/menu");
  }

  render() {
    return (
      <Segment>
        <Segment.Group>
          <Segment inverted padded color="blue">
            <h1 className="ui center aligned grid">What are you hungry for?</h1>
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
            {this.state.restaurants.map((restaurant, index) => {
              return (
                <List.Item key={index}>
                  <Button
                    animated="vertical"
                    floated="right"
                    value={restaurant.name}
                    onClick={this.onClick}
                    color="green"
                  >
                    <Button.Content hidden>
                      <Icon name="arrow circle right" />
                    </Button.Content>
                    <Button.Content visible>Order Now</Button.Content>
                  </Button>

                  <List.Header>
                    <h3>{restaurant.name}</h3>
                    Delivery fee: $2.99
                    <br />
                    Minimum order: $8.99
                  </List.Header>
                </List.Item>
              );
            })}
          </List>
        </Segment>
      </Segment>
    );
  }
}
