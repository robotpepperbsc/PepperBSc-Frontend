import React, { Fragment } from "react";
import { connect } from "react-redux";
import ImprovisationSpeech from "./ImprovisationSpeech";
import { queueSpeech } from "../../../modules/ActionModules/actions";

const ImprovisationSpeechContainer = props => {
  return (
    <Fragment>
      <ImprovisationSpeech queueSpeech={queueSpeech} />
    </Fragment>
  );
};

ImprovisationSpeechContainer.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  postSpeech: action => {
    dispatch(queueSpeech(action));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImprovisationSpeech);
