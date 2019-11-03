import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import downArrow from "../../../../assets/moveArrows/down-arrow.svg";
import turnLeft from "../../../../assets/moveArrows/rotate-left.svg";
import turnRight from "../../../../assets/moveArrows/rotate-right.png";
import upArrow from "../../../../assets/moveArrows/up-arrow.svg";
import "./ImprovisationMoveManual.scss";

export default class ImprovisationMoveManual extends Component {
  static propTypes = {
    prop: PropTypes
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedMove: null
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

  render() {
    return (
      <div className="improvisation-move-manual-container">
        <div>
          <Image
            onClick={this.handleSelectArrowUp}
            className={"arrow up"}
            src={upArrow}
          ></Image>
        </div>
        <div>
          <Image
            onClick={this.handleSelectArrowLeft}
            className={"arrow left"}
            src={turnLeft}
          ></Image>
          <Image
            onClick={this.handleSelectArrowRight}
            className={"arrow right"}
            src={turnRight}
          ></Image>
        </div>
        <div>
          <Image
            onClick={this.handleSelectArrowDown}
            className={"arrow down"}
            src={downArrow}
          ></Image>
        </div>
      </div>
    );
  }
}
