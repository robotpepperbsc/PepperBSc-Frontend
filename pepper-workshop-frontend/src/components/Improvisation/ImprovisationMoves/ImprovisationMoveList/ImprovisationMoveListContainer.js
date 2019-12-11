import React, { Fragment } from "react";
import { connect } from "react-redux";
import ImprovisationMoveList from "./ImprovisationMoveList";
import { getSequences } from "../../../../modules/Sequences/actions";
import { queueSequence } from "../../../../modules/ActionModules/actions";

const mapStateToProps = state => ({
  sequences: state.sequences.sequences,
  loading: state.sequences.loading
});

const mapDispatchToProps = {
  getSequences: getSequences,
  postSequence: queueSequence
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImprovisationMoveList);
