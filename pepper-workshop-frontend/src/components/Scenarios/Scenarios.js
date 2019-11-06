import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import ScenarioList from "./ScenarioList/ScenarioList";

export default class Scenarios extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    const { scenarios } = this.props;
    return (
      <Fragment>
        <ScenarioList scenarios={scenarios} />
      </Fragment>
    );
  }
}
