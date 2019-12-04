import React from "react";
import {connect} from "react-redux";
import ImprovisationMoveManual from "./ImprovisationMoveManual";
import {queueMove} from "../../../../modules/ActionModules/actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  queueMove: queueMove
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImprovisationMoveManual);
