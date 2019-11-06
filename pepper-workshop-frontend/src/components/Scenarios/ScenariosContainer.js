import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Scenarios from "./Scenarios";
import { getScenarios } from "../../modules/Scenarios/actions";

const ScenariosContainer = props => {
  const { scenarios } = props;

  return (
    <Fragment>
      <Scenarios scenarios={scenarios} />
    </Fragment>
  );
};

ScenariosContainer.propTypes = {};

const mapStateToProps = state => ({
  scenarios: state.scenarios,
  loading: state.scenarios.loading
});

const mapDispatchToProps = {
  getScenarios: getScenarios
};

export default connect(mapStateToProps, mapDispatchToProps)(ScenariosContainer);
