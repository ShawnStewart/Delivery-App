import React from "react";
import { Menu, Dropdown } from "semantic-ui-react";

export default () => {
  return (
    <Menu size="small">
      <Menu.Menu>
        <Dropdown item text="Customer">
          <Dropdown.Menu>
            <Dropdown.Item content="Register" />
            <Dropdown.Item content="Login" />
            <Dropdown.Item content="Order now" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>

      <Menu.Menu>
        <Dropdown item text="Driver">
          <Dropdown.Menu>
            <Dropdown.Item content="Register" />
            <Dropdown.Item content="Login" />
            <Dropdown.Item content="Dashboard" />
            <Dropdown.Item content="Current Delivery" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>

      <Menu.Menu position="right">
        <Dropdown item text="<Customer Name>" />
        <Dropdown item text="<Driver Name>" />
      </Menu.Menu>
    </Menu>
  );
};
