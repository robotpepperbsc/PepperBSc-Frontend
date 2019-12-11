import React from "react";
import { connect } from "react-redux";
import {
  deleteScenario,
  getScenarios,
  setActiveScenario,
  runScenario
} from "../../../modules/Scenarios/actions";
import ScenarioList from "./ScenarioList";

const mapStateToProps = state => ({
  scenarios: state.scenarios.scenarios,
  loading: state.scenarios.loading
});

const mapDispatchToProps = dispatch => ({
  getScenarios: () => {
    dispatch(getScenarios());
  },
  deleteScenario: name => {
    dispatch(deleteScenario(name));
  },
  setActiveScenario: name => {
    dispatch(setActiveScenario(name));
  },
  runScenario: (name, start, end) => {
    dispatch(runScenario(name, start, end));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ScenarioList);
