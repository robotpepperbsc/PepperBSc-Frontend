import React, { Component } from "react";
import PropTypes from "prop-types";
import { Dropdown, Button } from "react-bootstrap";
import classNames from "classnames";
import "./ImprovisationMoveList.scss";

export default class ImprovisationMoveList extends Component {
  static propTypes = {
    prop: PropTypes
  };
  constructor(props) {
    super(props);

    this.state = {
      seletectedMove: { label: "test" },
      moves: [
        { label: "test" },
        { label: "test 2" },
        { label: "test 3" },
        { label: "test move 2" }
      ]
    };
  }

  componentDidMount() {
    //fetch moves
  }

  selectMove = move => {
    this.setState({ seletectedMove: move });
  };

  handlePostMove = e => {
    e.stopPropagation();
    //post selectedMove
  };

  render() {
    const moves = this.state.moves;
    return (
      <div className={"improvisation-move-container"}>
        <div className={"improvisation header"}>Choose move</div>
        <div className={"moves-container"}>
          {moves.map(move => {
            const className = classNames("move", {
              selected: move.label === this.state.seletectedMove.label
            });
            return (
              <div className={className} onClick={e => this.selectMove(move)}>
                {move.label}
              </div>
            );
          })}
        </div>
        <Button className={"improvisation"} onClick={this.handlePostMove}>
          Post move
        </Button>
      </div>
    );
  }
}
