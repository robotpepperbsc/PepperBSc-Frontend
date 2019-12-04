import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import ScenarioListContainer from "./ScenarioList/ScenarioListContainer";
import ScenarioPanelContainer from "./ScenarioPanel/ScenarioPanelContainer";
import {Container, Grid} from "@material-ui/core";

export default class Scenarios extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Fragment>
        <Container component="main" maxWidth={"lg"}>
          <Grid container spacing={2}>
            <ScenarioListContainer />
            <ScenarioPanelContainer />
          </Grid>
        </Container>
      </Fragment>
    );
  }
}
