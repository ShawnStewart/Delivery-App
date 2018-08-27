import React, { Component } from "react";
import { List, Segment } from "semantic-ui-react";

class DispatchScreen extends Component {
  constructor(props) {
    super(props);

    this.setState = {};
  }
  render() {
    return (
      <Segment inverted>
        <List divided inverted relaxed>
          <List.Item>
            <List.Content>
              <List.Header> 2304 Perkins rd</List.Header>
              Stefanina's Pizzeria
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Content>
              <List.Header> Address</List.Header>
              Restaurant
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Content>
              <List.Header> Address</List.Header>
              Restaurant
            </List.Content>
          </List.Item>
        </List>
      </Segment>
    );
  }
}

export default DispatchScreen;
