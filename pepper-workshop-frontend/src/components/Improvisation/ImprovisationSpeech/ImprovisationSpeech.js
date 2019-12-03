import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { Form, Row, Col, Button, Container } from "react-bootstrap";
import "./ImprovisationSpeech.scss";
import SpeechSlider from "../../SpeechSlider/SpeechSlider";
import { createSpeechAction, pepperActionType } from "../pepperActionService";

export default class ImprovisationSpeech extends Component {
  static propTypes = {
    prop: PropTypes
  };
  constructor(props) {
    super(props);

    this.state = {
      speechInput: "",
      speechLoudness: 50,
      speechSpeed: 50,
      language: "Polish"
    };
  }

  componentDidMount() {
    const action = this.props.action;
    if (action) {
      this.setState({
        speechInput: action.text,
        speechLoudness: action.volume,
        speechSpeed: action.speechSpeed,
        language: action.language
      });
    }
  }

  handleSpeechInput = e => {
    e.stopPropagation();
    this.setState({ speechInput: e.target.value });
  };

  handleSpeechPost = e => {
    const { speechInput, speechLoudness, speechSpeed, language } = this.state;
    const speechAction = createSpeechAction(
      speechInput,
      speechLoudness,
      speechSpeed,
      language
    );
    if (this.props.action && this.props.saveEditedAction) {
      this.props.saveEditedAction();
      this.setState({ speechInput: "" });
      return;
    }

    if (this.props.addActionToScenario) {
      this.props.addActionToScenario(speechAction);
      this.setState({ speechInput: "" });
      return;
    }
    if (this.props.queueSpeech) {
      this.props.queueSpeech(speechAction);
      this.setState({ speechInput: "" });
      return;
    }
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
                  value={this.state.speechInput}
                  onChange={this.handleSpeechInput}
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
