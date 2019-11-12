import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getScenarios,
  deleteScenario,
  setActiveScenario
} from "../../../modules/Scenarios/actions";
import ScenarioList from "./ScenarioList";

const mapStateToProps = state => ({
  scenarios: state.scenarios.scenarios,
  loading: state.scenarios.loading
});

const mapDispatchToProps = {
  getScenarios: getScenarios,
  deleteScenario: deleteScenario,
  setActiveScenario: setActiveScenario
};

export default connect(mapStateToProps, mapDispatchToProps)(ScenarioList);
