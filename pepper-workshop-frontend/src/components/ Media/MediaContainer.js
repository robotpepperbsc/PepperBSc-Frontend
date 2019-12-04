import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Media from "./Media";
import { getMedia } from "../../modules/Media/actions";

const mapStateToProps = state => ({
  media: state.media.media,
  loading: state.media.loading
});

const mapDispatchToProps = {
  getMedia: getMedia
};

export default connect(mapStateToProps, mapDispatchToProps)(Media);
