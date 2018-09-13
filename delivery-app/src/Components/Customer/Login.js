import React, { Component } from "react";
import { Segment, Icon, Button, Label, Form } from "semantic-ui-react";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    // Check credentials
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <Segment>
        <Segment.Group>
          <Segment inverted padded color="blue">
            <h1 className="ui center aligned grid">Login</h1>
          </Segment>
          <Segment
            className="ui center aligned grid"
            padded
            color="blue"
            inverted
          >
            <Icon className="black" name="user circle" size="massive" />
          </Segment>
        </Segment.Group>
        <Segment padded className="ui center aligned grid">
          <h2>Welcome back!</h2>
        </Segment>
        <Form onSubmit={this.onSubmit}>
          <Segment color="black">
            <Label horizontal color="blue" size="large" content="Email" />
            <Form.Input
              placeholder="Email..."
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.onChange}
            />

            <Label horizontal color="blue" size="large" content="Password" />
            <Form.Input
              placeholder="Password..."
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </Segment>

          <Form.Field
            control={Button}
            fluid={true}
            content="Submit"
            color="green"
          />
        </Form>
      </Segment>
    );
  }
}
