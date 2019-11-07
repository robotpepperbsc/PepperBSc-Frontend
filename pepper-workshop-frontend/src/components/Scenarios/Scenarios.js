import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import ScenarioList from "./ScenarioList/ScenarioList";

export default class Scenarios extends Component {
  static propTypes = {
    prop: PropTypes
  };

  componentDidMount() {
    this.props.getScenarios();
  }

  render() {
    const { scenarios } = this.props;
    console.log(scenarios);
    return (
      <Fragment>
        <ScenarioList scenarios={scenarios} />
      </Fragment>
    );
  }
}
