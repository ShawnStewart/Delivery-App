import React, { Component } from "react";
import {
  Segment,
  Icon,
  Button,
  Modal,
  Header,
  Input,
  Label
} from "semantic-ui-react";
export default class DriverDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Bob Dillan",
      phone: "636-290-5555",
      email: "Bob@bob.com",
      deliveries: 453,
      earnings: 3563.66,
      miles: 6472
    };
  }

  render() {
    return (
      <Segment.Group>
        <Segment inverted padded color="blue">
          <h1 className="ui center aligned grid">Driver Name</h1>
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
            <Segment color="black">Name: {this.state.name}</Segment>
            <Segment>Phone: {this.state.phone}</Segment>
            <Segment>Email: {this.state.email}</Segment>
          </Segment.Group>

          <Segment padded className="ui center aligned grid">
            <h2>Account Stats</h2>
          </Segment>
          <Segment.Group>
            <Segment color="black">
              Lifetime deliveries: {this.state.deliveries}
            </Segment>
            <Segment>Lifetime earnings: ${this.state.earnings}</Segment>
            <Segment>Estimated miles driven: {this.state.miles}</Segment>
          </Segment.Group>
          <Segment>
            <Modal
              trigger={
                <Button icon="cog" content="Edit profile" color="blue" />
              }
              closeIcon
            >
              <Modal.Header>Edit Profile</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <Input
                    label="Name: "
                    type="text"
                    placeholder={this.state.name}
                  />{" "}
                  <br />
                  <Input
                    label="Phone: "
                    type="text"
                    placeholder={this.state.phone}
                  />{" "}
                  <br />
                  <Input
                    label="Email: "
                    type="text"
                    placeholder={this.state.email}
                  />{" "}
                  <br />
                  <br />
                </Modal.Description>
                <Button icon="check" color="green" content="Save" />
                <Button icon="close" color="red" content="Cancel" />
              </Modal.Content>
            </Modal>
            <Modal
              trigger={
                <Button icon="file" content="Driver documents" color="green" />
              }
              closeIcon
            >
              <Modal.Header>Driver Documents</Modal.Header>
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
