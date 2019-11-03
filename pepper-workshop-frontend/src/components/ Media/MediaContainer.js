import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Media from "./Media";

const MediaContainer = props => {
  const { media } = props;
  return (
    <Fragment>
      <Media media={media} />
    </Fragment>
  );
};

MediaContainer.propTypes = {};

const mapStateToProps = state => ({
  media: state.media.media,
  loading: state.media.loading
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer);
