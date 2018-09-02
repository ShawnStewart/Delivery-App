import React, { Component } from "react";
import { Segment, Button } from "semantic-ui-react";
import "./Customer.css";

class OrderNow extends Component {
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
  }

  handleRestaurantClick = (e, { name }) => {
    this.setState({ selectedRestaurant: name });
  };

  componentDidUpdate = (prevProps, prevState) => {
    this.props.DisplayMenu(this.state.selectedRestaurant);
  };

  render() {
    return (
      <Segment className="large__font" inverted color="blue">
        <h1 className="ui center aligned grid">
          Choose a restaurant to get started!
        </h1>
        {this.state.restaurants.map((restaurant, index) => {
          return (
            <Segment padded key={index} className="grey inverted">
              {restaurant.name}

              <Button
                floated="right"
                name={restaurant.name}
                onClick={this.handleRestaurantClick}
                content="Order Now!"
              />
            </Segment>
          );
        })}
      </Segment>
    );
  }
}

export default OrderNow;
