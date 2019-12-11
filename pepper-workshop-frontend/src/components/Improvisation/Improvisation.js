import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Improvisation.scss";
import { Col, Container, Row } from "react-bootstrap";
import ImprovisationSpeechContainer from "./ImprovisationSpeech/ImprovisationSpeechContainer";
import ImprovisationMoveList from "./ImprovisationMoves/ImprovisationMoveList/ImprovisationMoveList";
import ImprovisationMoveManual from "./ImprovisationMoves/ImprovisationMoveManual/ImprovisationMoveManual";
import ImprovisationMoveListContainer from "./ImprovisationMoves/ImprovisationMoveList/ImprovisationMoveListContainer";
import ImprovisationMoveManualContainer from "./ImprovisationMoves/ImprovisationMoveManual/ImprovisationMoveManualContainer";

export default class Improvisation extends Component {
  static propTypes = {
    prop: PropTypes
  };
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="improvisation-container">
          <Container>
            <Row>
              <Col>
                <ImprovisationSpeechContainer />
                <ImprovisationMoveListContainer />
                <ImprovisationMoveManualContainer />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
