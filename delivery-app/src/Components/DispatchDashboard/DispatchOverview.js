import React, { Component } from "react";
import { List, Segment, Icon, Grid, Button } from "semantic-ui-react";
import classnames from "classnames";

export default class DispatchOverview extends Component {
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
      ],
      drivers: [
        {
          name: "Nick",
          delivery: "Stefanina's Pizzeria",
          unavailable: true
        },
        {
          name: "Matt",
          delivery: "",
          unavailable: false
        },
        {
          name: "Tina",
          delivery: "",
          unavailable: false
        }
      ]
    };
  }

  GenerateDelivery = () => {};

  render() {
    return (
      <Grid>
        {/* Dispatch screen */}
        <Grid.Column width={10}>
          <Segment>
            <Segment.Group>
              <Segment inverted padded color="blue">
                <h1 className="ui center aligned grid">Dispatch Overview</h1>
              </Segment>
              <Segment
                className="ui center aligned grid"
                color="blue"
                padded
                inverted
              >
                <Icon
                  circular
                  className="black"
                  name="list layout"
                  size="huge"
                />
              </Segment>
            </Segment.Group>
            <Segment color="black">
              <List divided relaxed>
                {this.state.orders.map((order, index) => {
                  return (
                    <List.Item key={index}>
                      <List.Content floated="right">
                        <Button content="Select" color="blue" />
                      </List.Content>
                      <List.Icon name="marker" />
                      <List.Content>
                        <List.Header>{order.address}</List.Header>
                        <List.Description>{order.restaurant}</List.Description>
                      </List.Content>
                    </List.Item>
                  );
                })}
              </List>
            </Segment>
          </Segment>
        </Grid.Column>

        {/* Driver List */}
        <Grid.Column width={6}>
        <Segment>
          <Segment.Group>
            <Segment inverted padded color="blue">
              <h1 className="ui center aligned grid">Driver List</h1>
            </Segment>
            <Segment
              className="ui center aligned grid"
              color="blue"
              padded
              inverted
            >
              <Icon circular className="black" name="car" size="huge" />
            </Segment>
            
          </Segment.Group>
              <Segment color="black">
                <List divided relaxed>
                  {this.state.drivers.map((driver, index) => {
                    return (
                      <List.Item key={index}>
                        <List.Content>
                          <List.Header
                            className={classnames("available", {
                              unavailable: driver.unavailable
                            })}
                          >
                            {driver.name}
                          </List.Header>
                          {driver.delivery ? driver.delivery : "Available"}
                        </List.Content>
                      </List.Item>
                    );
                  })}
                </List>
              </Segment>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
