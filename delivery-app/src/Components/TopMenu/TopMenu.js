import React from "react";
import { Container, Menu, Dropdown } from "semantic-ui-react";

export default props => {
  return (
    <Menu size="large" color="teal" inverted>
      <Container>
        <Menu.Menu>
          <Dropdown item text="Customer">
            <Dropdown.Menu>
              <Dropdown.Item
                content="Register"
                onClick={() => props.history.push("/register")}
              />
              <Dropdown.Item
                content="Login"
                onClick={() => props.history.push("/login")}
              />
              <Dropdown.Item
                content="Order now"
                onClick={() => props.history.push("/delivery")}
              />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>

        <Menu.Menu>
          <Dropdown item text="Driver">
            <Dropdown.Menu>
              <Dropdown.Item
                content="Register"
                onClick={() => props.history.push("/driver/register")}
              />
              <Dropdown.Item
                content="Login"
                onClick={() => props.history.push("/driver/login")}
              />
              <Dropdown.Item content="Dashboard" />
              <Dropdown.Item content="Current Delivery" />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>

        <Menu.Menu position="right">
          <Dropdown item text="<Customer Name>" />
          <Dropdown item text="<Driver Name>" />
        </Menu.Menu>
      </Container>
    </Menu>
  );
};
