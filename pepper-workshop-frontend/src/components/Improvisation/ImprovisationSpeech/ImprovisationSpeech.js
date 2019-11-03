import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { Form, Row, Col, Button, Container } from "react-bootstrap";
import "./ImprovisationSpeech.scss";
import SpeechSlider from "../../SpeechSlider/SpeechSlider";

export default class ImprovisationSpeech extends Component {
  static propTypes = {
    prop: PropTypes
  };
  constructor(props) {
    super(props);

    this.state = {
      speechInput: "",
      speechLoudness: 50,
      speechSpeed: 50
    };
  }

  handleSpeechInput = e => {
    e.stopPropagation();
    this.setState({ speechInput: e.target.value });
  };

  handleSpeechPost = e => {
    e.stopPropagation();
    const url = "http://127.0.0.1:5000/speech";
    const data = {
      speech: this.state.speechInput
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
    this.setState({ speechInput: "" });
  };

  handleLoudnessChange = value => {
    this.setState({ speechLoudness: value });
  };

  handleSpeechSpeedChange = value => {
    this.setState({ speechSpeed: value });
  };

  render() {
    return (
      <Form>
        <Form.Group bsPrefix="form-group" as={Row} controlId="speechInput">
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col className="improvisation-speech">
                <Form.Label className={"improvisation header"} column sm="2">
                  Enter speech
                </Form.Label>
                <Form.Control
                  name="speechInput"
                  as={"textarea"}
                  onChange={this.handleChange}
                />
                <Form.Control
                  className="loudness-slider"
                  name="speechLodunessinput"
                  as={SpeechSlider}
                  onLoudnessChange={this.handleLoudnessChange}
                />
                <Form.Control
                  className="loudness-slider"
                  name="speechLodunessinput"
                  as={SpeechSlider}
                  onLoudnessChange={this.handleSpeechSpeedChange}
                />
                <Button
                  className={"improvisation"}
                  onClick={this.handleSpeechPost}
                >
                  Post speech
                </Button>
              </Col>
            </Row>
          </Container>
        </Form.Group>
      </Form>
    );
  }
}
