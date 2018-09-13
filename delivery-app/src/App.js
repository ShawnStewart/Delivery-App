import React, { Component } from "react";
import { Container } from "semantic-ui-react";

// Components
import TopMenu from "./Components/TopMenu/TopMenu";

// Styling
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  render() {
    return (
      <Container>
        <TopMenu />
      </Container>
    );
  }
}

export default App;
