import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import { Container } from "semantic-ui-react";
import Default from "./Components/404";
import TopMenu from "./Components/TopMenu/TopMenu";

import Register from "./Components/Customer/Register";
import Login from "./Components/Customer/Login";
import OrderNow from "./Components/Customer/OrderNow";

import DriverRegister from "./Components/Driver/Register";
import DriverLogin from "./Components/Customer/Login";
import DriverDashboard from "./Components/Driver/DriverDashboard";
import CurrentDelivery from "./Components/Driver/CurrentDelivery";
import RestaurantMenu from "./Components/Customer/RestaurantMenu";

// Styling
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={TopMenu} />
          <Container>
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/delivery" component={OrderNow} />
              <Route exact path="/delivery/menu" component={RestaurantMenu} />
              <Route exact path="/driver/register" component={DriverRegister} />
              <Route exact path="/driver/login" component={DriverLogin} />
              <Route
                exact
                path="/driver/dashboard"
                component={DriverDashboard}
              />
              <Route
                exact
                path="/driver/currentdelivery"
                component={CurrentDelivery}
              />
              <Route component={Default} />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
