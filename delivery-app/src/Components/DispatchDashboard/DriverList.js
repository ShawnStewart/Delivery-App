import React, { Component } from "react";
import { List, Segment } from "semantic-ui-react";

class DriverList extends Component {
  constructor(props){
    super(props);

    this.setState = {

    }
  }

  GenerateDriverList = () => {

  }
  render() {
    return (
    <Segment color='blue'>
    <List divided relaxed>
      <List.Item color='green'>
      <img className='ui avatar list' width='50px' height = '50px' src={require('../../images/kanye.jpg')} alt='avatar'></img>
        <List.Content>
          <List.Header >John Doe</List.Header>
          Stefanina's Pizzeria
        </List.Content>
      </List.Item>
</List>
  </Segment>
  )
  }
}

export default DriverList;
