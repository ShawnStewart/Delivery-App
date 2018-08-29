import React, { Component } from "react";
import { List, Segment } from "semantic-ui-react";
import "./DriverList.css";
import classnames from "classnames";

class DriverList extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  GenerateDriverList = () => {};

  render() {
    const name = this.name;
    return (
      <Segment>
        <List divided relaxed>
          {this.state.drivers.map((driver, index) => {
            return (
              <div
                className={classnames("available", {
                  unavailable: driver.unavailable
                })}
              >
                <List.Item>
                  <List.Content>
                    <List.Header>{driver.name}</List.Header>
                    {driver.delivery ? driver.delivery : "Available"}
                  </List.Content>
                </List.Item>
              </div>
            );
          })}
        </List>
      </Segment>
    );
  }
}

export default DriverList;
