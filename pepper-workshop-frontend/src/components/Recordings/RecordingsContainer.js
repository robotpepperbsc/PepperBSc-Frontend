import React from "react";
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

const mapDispatchToProps = dispatch => ({
  getRecordings: () => {
    dispatch(getRecordings());
  },
  playRecording: (name, fileType) => {
    dispatch(playRecording(name, fileType));
  },
  startRecording: () => {
    dispatch(startRecording());
  },
  stopRecording: () => {
    dispatch(stopRecording());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Recordings);
