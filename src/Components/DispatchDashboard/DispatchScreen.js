import React, { Component } from "react";
import { List, Segment } from "semantic-ui-react";

class DispatchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: [
        {
          address: "2304 Perkins rd",
          restaurant: "El Maguey"
        },
        {
          address: "123 Paris st",
          restaurant: "Subway"
        },
        {
          address: "2500 Beacon rdge",
          restaurant: "Noodles & Co"
        }
      ]
    };
  }

  GenerateDelivery = () => {};

  render() {
    return (
      <Segment inverted color="blue">
        <List divided relaxed>
          {this.state.orders.map((order, index) => {
            return (
              <List.Item>
                <List.Content>
                  <List.Header>{order.address}</List.Header>
                  {order.restaurant}
                </List.Content>
              </List.Item>
            );
          })}
        </List>
      </Segment>
    );
  }
}

export default DispatchScreen;
