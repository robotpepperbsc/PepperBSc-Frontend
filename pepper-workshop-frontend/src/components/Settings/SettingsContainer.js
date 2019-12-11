import React from "react";
import { connect } from "react-redux";
import { getStatus } from "../../modules/Utils/actions";
import Settings from "./Settings";

const mapStateToProps = state => ({
  battery: state.utils.battery,
  isRecording: state.utils.is_recording,
  isQueueEmpty: state.utils.is_queue_empty
});

const mapDispatchToProps = dispatch => ({
  getStatus: () => {
    dispatch(getStatus());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
