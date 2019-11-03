import React, { Component } from "react";
import PropTypes from "prop-types";
import ImprovisationNavbar from "../ImprovisationNavbar/ImprovisationNavbar";
import "./Improvisation.scss";
import { Container, Col, Row } from "react-bootstrap";
import ImprovisationSpeech from "./ImprovisationSpeech/ImprovisationSpeech";
import ImprovisationMoveList from "./ImprovisationMoves/ImprovisationMoveList/ImprovisationMoveList";
import ImprovisationMoveManual from "./ImprovisationMoves/ImprovisationMoveManual/ImprovisationMoveManual";

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
        <ImprovisationNavbar />
        <div className="improvisation-container">
          <Container>
            <Row>
              <Col>
                <ImprovisationSpeech />
                <ImprovisationMoveList />
                <ImprovisationMoveManual />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}