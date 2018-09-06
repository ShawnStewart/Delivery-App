import React, { Component } from "react";
import { Segment, Button } from "semantic-ui-react";
export default class CurrentDelivery extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Segment.Group inverted>
        <Segment>Current Delivery</Segment>
        <Segment.Group>
          <Segment>Order #4932</Segment>
          <Segment>Smoothie King at 2400 Grindstone rd SUITE A</Segment>
          <Segment>816 Willow rd</Segment>
        </Segment.Group>
        <Segment.Group horizontal>
          <Segment>Time placed: 5:46pm</Segment>
          <Segment>Order Total: $12.89</Segment>
          <Segment>Time on delivery: 12:31</Segment>
        </Segment.Group>
        <Segment>
          <Button>Complete Order</Button>
        </Segment>
      </Segment.Group>
    );
  }
}
