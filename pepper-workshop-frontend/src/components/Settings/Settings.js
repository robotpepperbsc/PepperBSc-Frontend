import React, { Component } from "react";
import { Form, Row, Col, Container } from "react-bootstrap";
import SpeechSlider from "../SpeechSlider/SpeechSlider";
import "./Settings.sass";

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robotsLanguage: "",
      voice: "",
      speechLoudness: 50
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoudnessChange = value => {
    this.setState({ speechLoudness: value });
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Group as={Row} controlId="robotsLanguage">
            <Form.Label column sm="2">
              robot's language
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="robotsLanguage"
                onChange={e => this.handleChange(e)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="voice">
            <Form.Label column sm="2">
              robot's voice
            </Form.Label>
            <Col sm="10">
              <Form.Control name="voice" onChange={e => this.handleChange(e)} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="speechLoudness">
            <Form.Label column sm="2">
              speech loudness
            </Form.Label>
            <Col sm="10">
              <div className="loudness-slider">
                <SpeechSlider
                  name="speechLoudness"
                  onLoudnessChange={e => this.handleLoudnessChange(e)}
                />
              </div>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
