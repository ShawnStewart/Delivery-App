import React, { Component } from "react";
import {
  Segment,
  Icon,
  Button,
  Modal,
  Header,
  Form,
  Container
} from "semantic-ui-react";
export default class AdminDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Restaurant: {
        name: "",
        address: {
          street: "",
          unit: "",
          city: "",
          state: "",
          zip: ""
        },
        phone: "",
        minimum: "",
        menuItems: [
          {
            name: "",
            price: "",
            desc: ""
          }
        ]
      }
    };
  }

  render() {
    return (
      <Segment.Group>
        <Segment inverted padded color="blue">
          <h1 className="ui center aligned grid">Admin</h1>
        </Segment>
        <Segment
          className="ui center aligned grid"
          padded
          color="blue"
          inverted
        >
          <Icon className="black" name="user circle" size="massive" />
        </Segment>
        <Segment.Group>
          <Segment padded className="ui center aligned grid">
            <h2>Account Info</h2>
          </Segment>
          <Segment.Group>
            <Segment color="black">Name: </Segment>
            <Segment>Phone: </Segment>
            <Segment>Email: </Segment>
          </Segment.Group>

          <Segment padded className="ui center aligned grid">
            <h2>Account Stats</h2>
          </Segment>
          <Segment.Group>
            <Segment color="black">Lifetime deliveries:</Segment>
            <Segment>Lifetime earnings: </Segment>
            <Segment>Estimated miles driven: </Segment>
          </Segment.Group>
          <Segment>
            <Modal
              trigger={
                <Button icon="cog" content="Add restaurant" color="blue" />
              }
              closeIcon
            >
              <Modal.Header as="h1">Add restaurant</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <Form onSubmit={this.onSubmit}>
                    <Container>
                      <h3>Restaurant information</h3>
                      <Form.Input
                        placeholder="Name"
                        label="Name"
                        type="text"
                        value={this.state.name}
                      />
                      <Form.Input
                        placeholder="Street"
                        label="Street: "
                        type="text"
                        value={this.state.street}
                      />
                      <Form.Input
                        placeholder="Unit"
                        label="Unit: "
                        type="text"
                        value={this.state.unit}
                      />
                      <Form.Input
                        placeholder="City"
                        label="City: "
                        type="text"
                        value={this.state.city}
                      />
                      <Form.Input
                        placeholder="State"
                        label="State: "
                        type="text"
                        value={this.state.state}
                      />
                      <Form.Input
                        placeholder="Zip code"
                        label="Zip code: "
                        type="Number"
                        value={this.state.zip}
                      />
                      <Form.Input
                        placeholder="Phone number"
                        label="Phone number"
                        type="Number"
                        value={this.state.phone}
                      />
                      <Form.Input
                        placeholder="Minimum delivery"
                        label="Minimum delivery"
                        type="Number"
                        value={this.state.minimum}
                      />
                    </Container>
                    <br />
                    <br />
                  </Form>
                </Modal.Description>
                <Button icon="check" color="green" content="Save" />
                <Button icon="close" color="red" content="Cancel" />
              </Modal.Content>
            </Modal>
            <Modal
              trigger={
                <Button icon="file" content="Manage restaurant" color="green" />
              }
              closeIcon
            >
              <Modal.Header>Manage restaurant</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <Header>Driver Agreement</Header>
                  <p>Review and accept driver agreement</p>
                  <Button icon="file" content="View driver agreement" />
                  <Header>Proof of Insurance</Header>
                  <p>Upload a photo of your insurance information</p>
                  <Button icon="file" content="Upload file" />
                </Modal.Description>
                <br />
                <br />
                <Button icon="check" color="green" content="Save" />
                <Button icon="close" color="red" content="Cancel" />
              </Modal.Content>
            </Modal>
          </Segment>
        </Segment.Group>
      </Segment.Group>
    );
  }
}
