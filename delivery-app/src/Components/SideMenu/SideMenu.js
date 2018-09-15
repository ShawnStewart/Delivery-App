import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import checkEmpty from "./checkEmpty";

// UI components
import DispatchOverview from "../DispatchDashboard/DispatchOverview";
import CurrentDelivery from "../Driver/CurrentDelivery";
import OrderNow from "../Customer/OrderNow";
import RestaurantMenu from "../Customer/RestaurantMenu";
import Checkout from "../Customer/Checkout";
import DriverDashboard from "../Driver/DriverDashboard";
import CustomerRegister from "../Customer/Register";
import DriverRegister from "../Driver/Register";
import Login from "../Customer/Login";
// import AdminLogin from "../DispatchDashboard/login";

export default class SideMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenuItem: "",
      selectedRestaurant: ""
    };
  }

  handleMenuClick = (e, { name }) => {
    this.setState({ activeMenuItem: name });
    console.log("selected", this.state.activeMenuItem);
  };

  handleOrderNowClick = (e, { name }) => {
    this.setState({ selectedRestaurant: name });
  };

  render() {
    return (
      <div>
        <Menu fluid vertical inverted size="massive" color="black">
          <Menu.Item>
            <Menu.Header>Customer</Menu.Header>
            <Menu.Menu>
              <Menu.Item
                name="Customer Register"
                content="Register"
                onClick={this.handleMenuClick}
                active={this.state.activeMenuItem === "Customer Register"}
              />
              <Menu.Item
                name="Customer Login"
                content="Login"
                onClick={this.handleMenuClick}
                active={this.state.activeMenuItem === "Customer Login"}
              />
              <Menu.Item
                name="Order Now"
                onClick={this.handleMenuClick}
                active={this.state.activeMenuItem === "Order Now"}
              />
              <Menu.Item
                name="Checkout"
                onClick={this.handleMenuClick}
                active={this.state.activeMenuItem === "Checkout"}
              />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Driver</Menu.Header>
            <Menu.Menu>
              <Menu.Item
                name="Driver Register"
                content="Register"
                onClick={this.handleMenuClick}
                active={this.state.activeMenuItem === "Driver Register"}
              />
              <Menu.Item
                name="Driver Login"
                content="Login"
                onClick={this.handleMenuClick}
                active={this.state.activeMenuItem === "Driver Login"}
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

        {this.state.activeMenuItem === "Dispatcher Overview" ? (
          <DispatchOverview />
        ) : null}

        {this.state.activeMenuItem === "Driver Dashboard" ? (
          <DriverDashboard />
        ) : null}

        {this.state.activeMenuItem === "Current Delivery" ? (
          <CurrentDelivery />
        ) : null}

        {this.state.activeMenuItem === "Order Now" &&
        checkEmpty(this.state.selectedRestaurant) ? (
          <OrderNow orderNowClick={this.handleOrderNowClick} />
        ) : null}

        {this.state.activeMenuItem === "Order Now" &&
        !checkEmpty(this.state.selectedRestaurant) ? (
          <RestaurantMenu selectedRestaurant={this.state.selectedRestaurant} />
        ) : null}

        {this.state.activeMenuItem === "Checkout" ? (
          <Checkout selectedRestaurant={this.state.selectedRestaurant} />
        ) : null}

        {this.state.activeMenuItem === "Customer Register" ? (
          <CustomerRegister />
        ) : null}

        {this.state.activeMenuItem === "Customer Login" ||
        this.state.activeMenuItem === "Driver Login" ? (
          <Login />
        ) : null}

        {this.state.activeMenuItem === "Driver Register" ? (
          <DriverRegister />
        ) : null}
      </div>
    );
  }
}
