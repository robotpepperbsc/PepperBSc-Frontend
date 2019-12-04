import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getRecordings } from "../../modules/Recordings/actions";
import Recordings from "./Recordings";

const mapStateToProps = state => ({
  recordings: state.recordings.recordings,
  loading: state.recordings.loading
});

const mapDispatchToProps = {
  getRecordings: getRecordings
};

export default connect(mapStateToProps, mapDispatchToProps)(Recordings);
