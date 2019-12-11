import React from "react";
import { connect } from "react-redux";
import Media from "./Media";
import { getMedia } from "../../modules/Media/actions";
import { queueMedia } from "../../modules/ActionModules/actions";

const mapStateToProps = state => ({
  photos: state.media.photos,
  videos: state.media.videos,
  loading: state.media.loading
});

const mapDispatchToProps = dispatch => ({
  getMedia: () => {
    dispatch(getMedia());
  },
  runMedia: mediaAction => {
    dispatch(queueMedia(mediaAction));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Media);
