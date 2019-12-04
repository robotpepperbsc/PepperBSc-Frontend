import React from "react";
import {connect} from "react-redux";
import Scenarios from "./Scenarios";
import {getScenarios} from "../../modules/Scenarios/actions";

const mapStateToProps = state => ({
  scenarios: state.scenarios.scenarios,
  activeScenario: state.scenarios.activeScenario,
  loading: state.scenarios.loading
});

const mapDispatchToProps = {
  getScenarios: getScenarios
};

export default connect(mapStateToProps, mapDispatchToProps)(Scenarios);
