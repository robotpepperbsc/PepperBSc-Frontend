import React, { Component } from "react";
import PropTypes from "prop-types";

import { Col, Container, Form, Row } from "react-bootstrap";
import "./ImprovisationSpeech.scss";
import SpeechSlider from "../../SpeechSlider/SpeechSlider";
import { createSpeechAction } from "../pepperActionService";
import { Button } from "@material-ui/core";

const languages = {
  english: "English",
  polish: "Polish",
  french: "French",
  German: "German"
};

export default class ImprovisationSpeech extends Component {
  static propTypes = {
    prop: PropTypes
  };
  constructor(props) {
    super(props);

    this.state = {
      speechInput: "",
      speechLoudness: 100 / 100,
      speechSpeed: 100,
      language: "English"
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
    if (this.props.postSpeech) {
      console.log(speechAction);
      this.props.postSpeech(speechAction);
      this.setState({ speechInput: "" });
      return;
    }
  };

  handleLoudnessChange = value => {
    this.setState({ speechLoudness: value / 100 });
  };

  handleSpeechSpeedChange = value => {
    this.setState({ speechSpeed: value });
  };

  handleLanguageChange = e => {
    this.setState({ language: e.target.value });
  };

  render() {
    return (
      <Form className={"improvisation-speech-container"}>
        <Form.Group
          bsPrefix="form-group speech-form"
          as={Row}
          controlId="speechInput"
        >
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col className="improvisation-speech">
                <Form.Label className={"improvisation header"}>
                  Enter speech
                </Form.Label>
                <Form.Control
                  name="speechInput"
                  as={"textarea"}
                  value={this.state.speechInput}
                  onChange={this.handleSpeechInput}
                />
                <Form.Label>
                  set loudness (current value: {this.state.speechLoudness})
                </Form.Label>
                <Form.Control
                  className="loudness-slider"
                  name="speechLodunessinput"
                  as={SpeechSlider}
                  values={[100]}
                  domain={[0, 100]}
                  onLoudnessChange={this.handleLoudnessChange}
                />
                <Form.Label>
                  set speech speed (current value: {this.state.speechSpeed})
                </Form.Label>
                <Form.Control
                  className="loudness-slider"
                  name="speechSpeedinput"
                  as={SpeechSlider}
                  values={[100]}
                  domain={[50, 400]}
                  onLoudnessChange={this.handleSpeechSpeedChange}
                />
                <Form.Label>set language</Form.Label>
                <Form.Control
                  name="speechLanguage"
                  as={"select"}
                  id={"select"}
                  onChange={this.handleLanguageChange}
                >
                  {Object.values(languages).map(language => (
                    <option>{language}</option>
                  ))}
                </Form.Control>
                <Button
                  variant={"contained"}
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
