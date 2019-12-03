import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setEditedAction,
  saveEditedAction,
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
