import React from "react";
import {connect} from "react-redux";
import {
    saveEditedAction,
    setEditedAction,
    setNewScenario,
    updateActiveScenario
} from "../../../modules/Scenarios/actions";
import ScenarioPanel from "./ScenarioPanel";

const mapStateToProps = state => ({
  activeScenario: state.scenarios.activeScenario,
  currentEditedAction: state.scenarios.currentEditedAction,
  currentEditedActionIndex: state.scenarios.currentEditedActionIndex,
  loading: state.scenarios.loading
});

const mapDispatchToProps = dispatch => ({
  setEditedAction: (index, action) => {
    dispatch(setEditedAction(index, action));
  },
  saveEditedAction: () => {
    dispatch(saveEditedAction());
  },
  setNewScenario: () => {
    dispatch(setNewScenario());
  },
  updateActiveScenario: (field, value) => {
    dispatch(updateActiveScenario(field, value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ScenarioPanel);
