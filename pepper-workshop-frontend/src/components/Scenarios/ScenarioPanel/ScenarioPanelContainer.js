import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getScenarios,
  deleteScenario,
  setNewScenario,
  updateActiveScenario
} from "../../../modules/Scenarios/actions";
import ScenarioPanel from "./ScenarioPanel";

const mapStateToProps = state => ({
  activeScenario: state.scenarios.activeScenario,
  loading: state.scenarios.loading
});

const mapDispatchToProps = dispatch => ({
  setNewScenario: () => {
    dispatch(setNewScenario());
  },
  updateActiveScenario: (field, value) => {
    dispatch(updateActiveScenario(field, value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ScenarioPanel);
