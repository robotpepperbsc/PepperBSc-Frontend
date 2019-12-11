import React, { useEffect } from "react";
import ScenarioListItem from "./ScenarioListItem";
import { Grid, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "80%"
  }
}));

const ScenarioList = ({
  scenarios,
  getScenarios,
  deleteScenario,
  setActiveScenario,
  runScenario
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
              runScenario={runScenario}
            />
          );
        })}
      </List>
    </Grid>
  );
};

export default ScenarioList;
