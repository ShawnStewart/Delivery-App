import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";

// Components
import SideMenu from "./Components/SideMenu/SideMenu";

// Styling
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  render() {
    return (
      <Container>
        <SideMenu />
      </Container>
    );
  }
}

export default App;
