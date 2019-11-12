import React from "react";
import PropTypes from "prop-types";

const ScenarioPanel = ({ activeScenario }) => {
  return <div>{JSON.stringify(activeScenario)}</div>;
};

ScenarioPanel.propTypes = {};

export default ScenarioPanel;
