import React from "react";
import { connect } from "react-redux";
import ImprovisationMoveManual from "./ImprovisationMoveManual";
import { queueMove } from "../../../../modules/ActionModules/actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  queueMove: move => {
    dispatch(queueMove(move));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImprovisationMoveManual);
