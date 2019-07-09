import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";

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
              <Form.Control
                name="speechLoudness"
                onChange={e => this.handleChange(e)}
              />
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
