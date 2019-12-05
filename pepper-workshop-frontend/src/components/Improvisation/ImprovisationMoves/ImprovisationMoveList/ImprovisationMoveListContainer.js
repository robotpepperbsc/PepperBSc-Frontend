import React, { Fragment } from "react";
import { connect } from "react-redux";
import ImprovisationMoveList from "./ImprovisationMoveList";
import {
  getSequences,
  postSequence
} from "../../../../modules/Sequences/actions";

const mapStateToProps = state => ({
  sequences: state.sequences.sequences,
  loading: state.sequences.loading
});

const mapDispatchToProps = {
  getSequences: getSequences,
  postSequence: postSequence
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImprovisationMoveList);
