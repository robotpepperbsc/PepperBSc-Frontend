import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ImprovisationMoveManual from "./ImprovisationMoveManual";
import { queueMove } from "../../../../modules/ActionModules/actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  queueMove: queueMove
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImprovisationMoveManual);
