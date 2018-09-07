import React, { Component } from "react";
import { Segment, Button, Modal, Icon } from "semantic-ui-react";

export default class CurrentDelivery extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Segment.Group inverted>
        <Segment
          color="blue"
          inverted
          padded
          className="ui center aligned grid"
        >
          <h1>Current Delivery</h1>
        </Segment>
        <Segment
          className="ui center aligned grid"
          padded
          color="blue"
          inverted
        >
          <Icon circular className="black" name="car" size="huge" />
        </Segment>
        <br />
        <Segment.Group padded>
          <Segment color="black">Order #4932</Segment>
          <Segment>Smoothie King at 2400 Grindstone rd SUITE A</Segment>
          <Segment>816 Willow rd</Segment>
        </Segment.Group>
        <br />
        <Segment.Group horizontal>
          <Segment color="black">Time placed: 5:46pm</Segment>
          <Segment color="black">Order Total: $12.89</Segment>
          <Segment color="black">Time on delivery: 12:31</Segment>
        </Segment.Group>
        <Segment>
          <Button color="green" icon="check">
            Complete Order
          </Button>

          <Modal
            trigger={
              <Button
                floated="right"
                color="red"
                icon="close"
                content="Drop Delivery"
              />
            }
            closeIcon
          >
            <Modal.Header>Drop Delivery</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <p>
                  Are you sure you want to drop this delivery? Dropping too many
                  deliveries can reflect poorly on your driver review!
                </p>
              </Modal.Description>
              <br />
              <br />
              <Button icon="check" color="green" content="Yes" />
              <Button icon="close" color="red" content="No" />
            </Modal.Content>
          </Modal>
        </Segment>
      </Segment.Group>
    );
  }
}
