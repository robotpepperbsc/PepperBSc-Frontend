import React, { Component, useEffect } from "react";
import PropTypes from "prop-types";
import ScenarioListItem from "./ScenarioListItem";
import { Grid, GridList, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "80%",
    backgroundColor: theme.palette.background.paper
  }
}));

const ScenarioList = ({
  scenarios,
  getScenarios,
  deleteScenario,
  setActiveScenario
}) => {
  useEffect(() => {
    getScenarios();
  }, []);

  const classes = useStyles();

  return (
    <Grid container item xs={6}>
      <List classes={classes}>
        {scenarios.map(scenario => {
          return (
            <ScenarioListItem
              scenario={scenario}
              deleteScenario={deleteScenario}
              setActiveScenario={setActiveScenario}
            />
          );
        })}
      </List>
    </Grid>
  );
};

export default ScenarioList;
