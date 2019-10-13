import React, { Component } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import SpeechSlider from "../SpeechSlider/SpeechSlider";
import "./Settings.scss";
import axios from "axios";

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robotsLanguage: "",
      robotsIPAddress: "",
      voice: "",
      speechLoudness: 50
    };
  }

  handleChange = e => {
    e.stopPropagation();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoudnessChange = value => {
    this.setState({ speechLoudness: value });
  };

  handleConnectionTest = e => {
    e.stopPropagation();
    const url = "http://127.0.0.1:5000/connection";
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
  };
  postSettings = e => {
    e.stopPropagation();
    const url = "http://127.0.0.1:5000/settings";
    const data = {
      ipAddress: this.state.ipAddress,
      robotsLanguage: this.state.robotsLanguage,
      voice: this.state.voice,
      speechLoudness: this.state.speechLoudness
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
  };

  render() {
    return (
      <div className="settings-container">
        <Container fluid>
          <Row>
            <Col>
              <Form>
                <Form.Group
                  bsPrefix="form-group settings-form-group"
                  as={Row}
                  controlId="robotsIPAddress"
                >
                  <Form.Label column sm="2">
                    robot's IP address
                  </Form.Label>
                  <Col>
                    <Form.Control
                      name="robotsIPAddress"
                      onChange={this.handleChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="robotsLanguage">
                  <Form.Label column sm="2">
                    robot's language
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      name="robotsLanguage"
                      onChange={this.handleChange}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="voice">
                  <Form.Label column sm="2">
                    robot's voice
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control name="voice" onChange={this.handleChange} />
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
                        onLoudnessChange={this.handleLoudnessChange}
                      />
                    </div>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Row>
                <div className={"buttons-row"}>
                  <Button
                    variant="secondary"
                    onClick={this.handleConnectionTest}
                  >
                    Check connection
                  </Button>
                  <Button variant="secondary" onClick={this.postSettings}>
                    Post settings
                  </Button>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
