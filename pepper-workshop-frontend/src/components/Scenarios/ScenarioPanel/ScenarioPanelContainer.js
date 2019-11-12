import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getScenarios,
  deleteScenario
} from "../../../modules/Scenarios/actions";
import ScenarioPanel from "./ScenarioPanel";

const mapStateToProps = state => ({
  activeScenario: state.scenarios.activeScenario,
  loading: state.scenarios.loading
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ScenarioPanel);
