import React, {Fragment} from "react";
import {connect} from "react-redux";
import ImprovisationMoveList from "./ImprovisationMoveList";

const ImprovisationMoveListContainer = props => {
  return (
    <Fragment>
      <ImprovisationMoveList />
    </Fragment>
  );
};

ImprovisationMoveListContainer.propTypes = {};

const mapStateToProps = state => ({
  moves: state.moves.moves,
  loading: state.moves.loading
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImprovisationMoveListContainer);
