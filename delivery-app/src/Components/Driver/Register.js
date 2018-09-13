import React, { Component } from "react";
import { Segment, Icon, Button, Grid, Label, Form } from "semantic-ui-react";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      birthday: "",
      password: "",
      password2: "",
      year: "",
      make: "",
      model: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    // const newCustomer = {
    //   firstname: this.state.firstname,
    //   lastname: this.state.lastname,
    //   phone: this.state.phone,
    //   email: this.state.email,
    //   password: this.state.password,
    //   password2: this.state.password2
    // };

    // this.props.registerCustomer(newCustomer, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log("state", this.state);
  };

  render() {
    return (
      <Segment.Group>
        <Segment inverted padded color="blue">
          <h1 className="ui center aligned grid">Register</h1>
        </Segment>
        <Segment
          className="ui center aligned grid"
          padded
          color="blue"
          inverted
        >
          <Icon className="black" name="user circle" size="massive" />
        </Segment>
        <Segment padded className="ui center aligned grid">
          <h2>Create Account</h2>
        </Segment>
        <Segment.Group>
          <Form onSubmit={this.onSubmit}>
            <Grid>
              <Grid.Column width={8}>
                <Segment color="black">
                  <Label
                    horizontal
                    color="blue"
                    size="large"
                    content="First name"
                  />
                  <Form.Input
                    placeholder="First name..."
                    name="firstname"
                    value={this.state.firstname}
                    onChange={this.onChange}
                  />
                </Segment>
                <Segment>
                  <Label
                    horizontal
                    color="blue"
                    size="large"
                    content="Last name"
                  />
                  <Form.Input
                    placeholder="Last name..."
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.onChange}
                  />
                </Segment>
                <Segment>
                  <Label
                    horizontal
                    color="blue"
                    size="large"
                    content="Phone number"
                  />
                  <Form.Input
                    placeholder="Phone..."
                    name="phone"
                    value={this.state.phone}
                    onChange={this.onChange}
                  />
                </Segment>
                <Segment>
                  <Label
                    horizontal
                    color="blue"
                    size="large"
                    content="Birthday"
                  />
                  <Form.Input
                    type="date"
                    placeholder="Birthday..."
                    name="birthday"
                    value={this.state.birthday}
                    onChange={this.onChange}
                  />
                </Segment>

                <Segment>
                  <Label horizontal color="blue" size="large" content="Year" />
                  <Form.Input
                    placeholder="Year..."
                    name="year"
                    value={this.state.year}
                    onChange={this.onChange}
                  />
                </Segment>
              </Grid.Column>
              <Grid.Column width={8}>
                <Segment>
                  <Label horizontal color="blue" size="large" content="make" />
                  <Form.Input
                    placeholder="Make..."
                    name="make"
                    value={this.state.make}
                    onChange={this.onChange}
                  />
                </Segment>
                <Segment>
                  <Label horizontal color="blue" size="large" content="model" />
                  <Form.Input
                    placeholder="Model..."
                    name="model"
                    value={this.state.model}
                    onChange={this.onChange}
                  />
                </Segment>
                <Segment color="black">
                  <Label horizontal color="blue" size="large" content="Email" />
                  <Form.Input
                    placeholder="Email..."
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </Segment>
                <Segment>
                  <Label
                    horizontal
                    color="blue"
                    size="large"
                    content="Password"
                  />
                  <Form.Input
                    placeholder="Password..."
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </Segment>
                <Segment>
                  <Label
                    horizontal
                    color="blue"
                    size="large"
                    content="Confirm password"
                  />
                  <Form.Input
                    placeholder="Confirm password..."
                    name="password2"
                    type="password"
                    value={this.state.password2}
                    onChange={this.onChange}
                  />
                </Segment>
                <Form.Field
                  control={Button}
                  fluid={true}
                  content="Submit"
                  color="green"
                />
              </Grid.Column>
            </Grid>
          </Form>
        </Segment.Group>
      </Segment.Group>
    );
  }
}
