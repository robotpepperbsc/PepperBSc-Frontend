import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import downArrow from "../../../../assets/moveArrows/down-arrow.svg";
import turnLeft from "../../../../assets/moveArrows/rotate-left.svg";
import turnRight from "../../../../assets/moveArrows/rotate-right.png";
import upArrow from "../../../../assets/moveArrows/up-arrow.svg";
import "./ImprovisationMoveManual.scss";
import classNames from "classnames";

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

  sendClearMove = e => {
    e.stopPropagation();
    //sendmove
    this.setState({ selectedMove: null });
  };

  render() {
    return (
      <div className="improvisation-move-manual-container">
        <div>
          <Image
            onMouseDown={this.handleSelectArrowUp}
            onMouseUp={this.sendClearMove}
            className={classNames("arrow up", {
              selected: this.state.selectedMove === "up"
            })}
            src={upArrow}
          ></Image>
        </div>
        <div>
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
        </div>
        <div>
          <Image
            onMouseDown={this.handleSelectArrowDown}
            onMouseUp={this.sendClearMove}
            className={classNames("arrow down", {
              selected: this.state.selectedMove === "back"
            })}
            src={downArrow}
          ></Image>
        </div>
      </div>
    );
  }
}
