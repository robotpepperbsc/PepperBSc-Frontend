import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import downArrow from "../../../../assets/moveArrows/down-arrow.svg";
import turnLeft from "../../../../assets/moveArrows/rotate-left.svg";
import turnRight from "../../../../assets/moveArrows/rotate-right.png";
import upArrow from "../../../../assets/moveArrows/up-arrow.svg";
import "./ImprovisationMoveManual.scss";
import classNames from "classnames";
import { Grid } from "@material-ui/core";
import { Form, Row } from "react-bootstrap";
import SpeechSlider from "../../../SpeechSlider/SpeechSlider";
import { createMoveAction } from "../../pepperActionService";

export default class ImprovisationMoveManual extends Component {
  static propTypes = {
    prop: PropTypes
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedMove: null,
      angle: 0,
      distance: 100
    };
  }

  handleSelectArrowUp = e => {
    e.stopPropagation();
    this.setState({ selectedMove: "up" });
  };

  handleSelectArrowRight = e => {
    e.stopPropagation();
    this.setState({ selectedMove: "right" });
  };

  handleSelectArrowDown = e => {
    e.stopPropagation();
    this.setState({ selectedMove: "back" });
  };

  handleSelectArrowLeft = e => {
    e.stopPropagation();
    this.setState({ selectedMove: "left" });
  };

  sendClearMove = e => {
    e.stopPropagation();
    const { selectedMove, distance, angle } = this.state;
    const distanceNormalized = distance / 100;
    const angleNormalized = this.getAngle();
    const moveToSend = createMoveAction(
      selectedMove,
      distanceNormalized,
      angleNormalized
    );
    this.props.queueMove(moveToSend);
    this.setState({ selectedMove: null });
  };

  handleAngleChange = value => {
    this.setState({ angle: value });
  };

  handleDistanceChange = value => {
    this.setState({ distance: value });
  };

  getAngle = () => {
    return Math.round(((this.state.angle * Math.PI) / 180) * 100) / 100;
  };

  render() {
    return (
      <div className="improvisation-move-manual-container">
        <Grid
          xs={6}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Form className={"improvisation-speech-container"}>
            <Form.Group
              bsPrefix="form-group speech-form"
              as={Row}
              controlId="speechInput"
            >
              <Form.Label>
                set angle (current value: {this.state.angle} degrees)
              </Form.Label>
              <Form.Control
                className="loudness-slider"
                name="speechLodunessinput"
                as={SpeechSlider}
                values={[0]}
                domain={[-180, 180]}
                onLoudnessChange={this.handleAngleChange}
              />
              <Form.Label>
                set distance (current value: {this.state.distance / 100}m)
              </Form.Label>
              <Form.Control
                className="loudness-slider"
                name="speechSpeedinput"
                as={SpeechSlider}
                values={[100]}
                domain={[0, 1000]}
                onLoudnessChange={this.handleDistanceChange}
              />
            </Form.Group>
          </Form>
        </Grid>
        <Grid
          xs={6}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid>
            <Image
              onMouseDown={this.handleSelectArrowUp}
              onMouseUp={this.sendClearMove}
              className={classNames("arrow up", {
                selected: this.state.selectedMove === "up"
              })}
              src={upArrow}
            ></Image>
          </Grid>
          <Grid>
            <Image
              onMouseDown={this.handleSelectArrowLeft}
              onMouseUp={this.sendClearMove}
              className={classNames("arrow left", {
                selected: this.state.selectedMove === "left"
              })}
              src={turnLeft}
            ></Image>
            <Image
              onMouseDown={this.handleSelectArrowRight}
              onMouseUp={this.sendClearMove}
              className={classNames("arrow right", {
                selected: this.state.selectedMove === "right"
              })}
              src={turnRight}
            ></Image>
          </Grid>
          <Grid>
            <Image
              onMouseDown={this.handleSelectArrowDown}
              onMouseUp={this.sendClearMove}
              className={classNames("arrow down", {
                selected: this.state.selectedMove === "back"
              })}
              src={downArrow}
            ></Image>
          </Grid>
        </Grid>
      </div>
    );
  }
}
