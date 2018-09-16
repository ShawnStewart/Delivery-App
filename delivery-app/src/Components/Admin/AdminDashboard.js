import React, { Component } from "react";
import {
  Segment,
  Icon,
  Button,
  Modal,
  Header,
  Form,
  Container,
  Grid
} from "semantic-ui-react";

// action
import { addRestaurant } from "../../Actions/Admin/AdminAction";
import { connect } from "react-redux";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      street: "",
      unit: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      minimum: "",
      menuItems: [
        {
          name: "",
          price: "",
          desc: ""
        }
      ]
    };

    this.addRestaurantSubmit = this.addRestaurantSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log("state", this.state);
  }

  addRestaurantSubmit(e) {
    e.preventDefault();

    const restaurantData = {
      name: this.state.name,
      street: this.state.street,
      unit: this.state.unit,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      phone: this.state.phone,
      minimum: this.state.minimum
    };

    console.log("data", restaurantData);
    this.props.addRestaurant(restaurantData, this.props.history);
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
                <Button
                  icon="file"
                  content="Manage restaurants"
                  color="green"
                />
              }
              closeIcon
            >
              <Modal.Header>Manage restaurant</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <Header>Select a restaurant to edit</Header>
                </Modal.Description>
                <br />
                <br />
                <Button icon="check" color="green" content="Save" />
                <Button icon="close" color="red" content="Cancel" />
                <Modal
                  trigger={
                    <Button icon="cog" content="Add restaurant" color="blue" />
                  }
                  closeIcon
                >
                  <Modal.Header as="h1">Add restaurant</Modal.Header>
                  <Modal.Content>
                    <Modal.Description>
                      <Form onSubmit={this.addRestaurantSubmit}>
                        <Container>
                          <h3>Restaurant information</h3>
                          <Grid>
                            <Grid.Column width={8}>
                              <Form.Input
                                placeholder="Name"
                                label="Name"
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                              />
                              <Form.Input
                                placeholder="Street"
                                label="Street: "
                                type="text"
                                name="street"
                                value={this.state.street}
                                onChange={this.onChange}
                              />
                              <Form.Input
                                placeholder="Unit"
                                label="Unit: "
                                type="text"
                                name="unit"
                                value={this.state.unit}
                                onChange={this.onChange}
                              />
                              <Form.Input
                                placeholder="City"
                                label="City: "
                                type="text"
                                name="city"
                                value={this.state.city}
                                onChange={this.onChange}
                              />
                            </Grid.Column>
                            <Grid.Column width={8}>
                              <Form.Input
                                placeholder="State"
                                label="State: "
                                type="text"
                                name="state"
                                value={this.state.state}
                                onChange={this.onChange}
                              />
                              <Form.Input
                                placeholder="Zip code"
                                label="Zip code: "
                                type="Number"
                                name="zip"
                                value={this.state.zip}
                                onChange={this.onChange}
                              />
                              <Form.Input
                                placeholder="Phone number"
                                label="Phone number"
                                type="Number"
                                name="phone"
                                value={this.state.phone}
                                onChange={this.onChange}
                              />
                              <Form.Input
                                placeholder="Minimum delivery"
                                label="Minimum delivery"
                                type="Number"
                                name="minimum"
                                value={this.state.minimum}
                                onChange={this.onChange}
                              />
                            </Grid.Column>
                          </Grid>
                        </Container>
                        <br />
                        <br />
                        <Form.Field
                          control={Button}
                          icon="check"
                          color="green"
                          content="Save"
                        />
                      </Form>
                    </Modal.Description>

                    <Button icon="close" color="red" content="Cancel" />
                  </Modal.Content>
                </Modal>
              </Modal.Content>
            </Modal>
          </Segment>
        </Segment.Group>
      </Segment.Group>
    );
  }
}

const mapStateToProps = state => {
  return {
    addRestaurantErrors: state.addRestaurantErrors
  };
};

export default connect(
  mapStateToProps,
  { addRestaurant }
)(AdminDashboard);
