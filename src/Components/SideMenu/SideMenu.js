import React, { Component } from "react";
import { Grid, Menu, Segment, GridColumn } from "semantic-ui-react";
import DispatchScreen from "../DispatchDashboard/DispatchScreen";
import DriverList from "../DispatchDashboard/DriverList";
import CurrentDelivery from "../Driver/CurrentDelivery";

export default class SideMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenuItem: ""
    };
  }

  handleMenuClick = (e, { name }) => {
    this.setState({ activeMenuItem: name });
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={3}>
          <Menu fluid vertical inverted color="orange">
            <Menu.Item>
              <Menu.Header>Customer</Menu.Header>
              <Menu.Menu>
                <Menu.Item
                  name="Register"
                  onClick={this.handleMenuClick}
                  active={this.state.activeMenuItem === "Register"}
                />
                <Menu.Item
                  name="CustomerLogin"
                  content="Login"
                  onClick={this.handleMenuClick}
                  active={this.state.activeMenuItem === "CustomerLogin"}
                />
                <Menu.Item
                  name="Order Restaurants"
                  onClick={this.handleMenuClick}
                  active={this.state.activeMenuItem === "Order Restaurants"}
                />
                <Menu.Item
                  name="Checkout Review"
                  onClick={this.handleMenuClick}
                  active={this.state.activeMenuItem === "Checkout Review"}
                />
              </Menu.Menu>
            </Menu.Item>

            <Menu.Item>
              <Menu.Header>Driver</Menu.Header>
              <Menu.Menu>
                <Menu.Item
                  name="DriverLogin"
                  content="Login"
                  onClick={this.handleMenuClick}
                  active={this.state.activeMenuItem === "DriverLogin"}
                />
                <Menu.Item
                  name="Driver Dashboard"
                  onClick={this.handleMenuClick}
                  active={this.state.activeMenuItem === "Driver Dashboard"}
                />
                <Menu.Item
                  name="Current Delivery"
                  onClick={this.handleMenuClick}
                  active={this.state.activeMenuItem === "Current Delivery"}
                />
              </Menu.Menu>
            </Menu.Item>

            <Menu.Item>
              <Menu.Header>Dispatch</Menu.Header>
              <Menu.Menu>
                <Menu.Item
                  name="Dispatcher Overview"
                  onClick={this.handleMenuClick}
                  active={this.state.activeMenuItem === "Dispatcher Overview"}
                />
              </Menu.Menu>
            </Menu.Item>
          </Menu>
        </Grid.Column>

        {this.state.activeMenuItem === "Dispatcher Overview" ? (
          <Grid.Column width={13}>
            <Grid>
              <Grid.Column width={12}>
                <DispatchScreen />
              </Grid.Column>

              <Grid.Column width={4}>
                <DriverList />
              </Grid.Column>
            </Grid>
          </Grid.Column>
        ) : null}

        {this.state.activeMenuItem === "Current Delivery" ? (
          <Grid.Column width={13}>
            <CurrentDelivery />
          </Grid.Column>
        ) : null}
      </Grid>
    );
  }
}
