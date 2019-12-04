import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getRecordings,
  playRecording,
  startRecording,
  stopRecording
} from "../../modules/Recordings/actions";
import Recordings from "./Recordings";

const mapStateToProps = state => ({
  recordings: state.recordings.recordings,
  loading: state.recordings.loading
});

const mapDispatchToProps = {
  getRecordings: getRecordings,
  playRecording: playRecording,
  startRecording: startRecording,
  stopRecording: stopRecording
};

export default connect(mapStateToProps, mapDispatchToProps)(Recordings);
