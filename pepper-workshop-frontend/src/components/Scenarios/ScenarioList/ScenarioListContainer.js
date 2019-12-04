import React from "react";
import {connect} from "react-redux";
import {deleteScenario, getScenarios, setActiveScenario} from "../../../modules/Scenarios/actions";
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
