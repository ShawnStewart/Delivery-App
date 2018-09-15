import React from "react";
import { Segment, Header, Icon, Message, Button } from "semantic-ui-react";

export default props => {
  console.log(props.history);
  return (
    <Segment.Group>
      <Segment textAlign="center" color="red" inverted>
        <Header as="h2" icon size="huge">
          <Icon name="warning sign" />
          Error: 404
        </Header>
      </Segment>
      <Segment textAlign="center" size="large" color="red" inverted>
        Sorry! We can't seem to find the page you are looking for.
      </Segment>
      <Message attached="bottom" color="red">
        <Button
          content="Go back"
          color="teal"
          icon="arrow left"
          onClick={props.history.goBack}
        />
      </Message>
    </Segment.Group>
  );
};
