import React, { Component } from "react";
import { Segment, Icon, Button, Modal, Header, Input } from "semantic-ui-react";
export default class AdminDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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
                <Button icon="cog" content="Edit profile" color="blue" />
              }
              closeIcon
            >
              <Modal.Header>Add restaurant</Modal.Header>
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
