import React, { Fragment } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { clearQueue } from "../../modules/Utils/actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  clearQueue: () => {
    dispatch(clearQueue());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
