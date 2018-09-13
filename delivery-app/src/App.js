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
// import DriverLogin from "./Components/Driver/Login";

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
              <Route exact path="/driver/register" component={DriverRegister} />
              {/* <Route exact path="/driver/login" component={DriverLogin} /> */}
              <Route component={Default} />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
