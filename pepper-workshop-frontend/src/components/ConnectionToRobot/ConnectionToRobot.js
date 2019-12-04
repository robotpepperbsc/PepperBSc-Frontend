import React from "react";
import {Button, Form, Grid, Header, Image, Message, Segment} from "semantic-ui-react";
import headLogo from "../../assets/pepper_head_logo.png";
import "./ConnectionToRobot.sass";
import axios from "axios";

class ConnectionToRobot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ipAddress: ""
    };
  }

  handleSubmit() {
    const url = "http://127.0.0.1:5000/check_connection";
    const data = {
      ipAddress: this.state.ipAddress
    };

    axios
      .post(url, data)
      .then(response => {
        this.setState({ loading: false });
        if (response.status === 200) {
          //go to TabMenu & senc IP address
        } else {
          throw new Error(response.status.toString());
        }
      })
      .catch(error => {
        if (error.response.status === 401) {
        }
        console.log("error " + error);
      });
  }

  render() {
    return (
      <Grid
        textAlign="center"
        className="connection-grid"
        verticalAlign="middle"
      >
        <Grid.Column className="grid-column">
          <Image src={headLogo} fluid />
          <Header as="h1" color="teal" textAlign="center">
            <p>Enter Pepper's IP</p>
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="wifi"
                iconPosition="left"
                placeholder="192.168.1.101"
                onChange={e => this.setState({ ipAddress: e.target.value })}
              />
              <Button
                color="teal"
                fluid
                size="large"
                onClick={() => this.handleSubmit()}
              >
                Connect
              </Button>
            </Segment>
          </Form>
          <Message>Start the journey!</Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default ConnectionToRobot;
