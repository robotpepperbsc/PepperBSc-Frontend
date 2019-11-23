import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import ScenarioHeader from "./ScenarioHeader";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const ScenarioPanel = ({ activeScenario, postScenario, modifyScenario }) => {
  const classes = useStyles();

  const [values, setValues] = useState({
    newScenario: true,
    name: "",
    description: "",
    actions: []
  });

  useEffect(() => {
    setValues({
      newScenario: false
    });
  }, [activeScenario]);

  const handleNewScenario = () => {
    setValues({
      newScenario: true,
      name: "",
      description: "",
      actions: []
    });
  };

  const handlePostScenario = () => {
    const scenario = {
      name: values.name,
      description: values.description,
      actions: values.actions
    };
    values.newScenario ? postScenario(scenario) : modifyScenario(scenario);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const newClearButonnDisabled = () => {
    return (
      values.newScenario &&
      !values.name &&
      !values.description &&
      !values.actions.length === 0
    );
  };

  return (
    <Grid container item xs={6}>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleNewScenario}
        disabled={newClearButonnDisabled()}
      >
        {!values.newScenario ? "new scenario" : "clear new scenario"}
      </Button>
      {activeScenario || values.newScenario ? (
        <Fragment>
          <ScenarioHeader
            name={values.name}
            description={values.description}
            handleNameChange={handleChange}
            handleDescriptionChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handlePostScenario}
          >
            save scenario
          </Button>
        </Fragment>
      ) : null}
    </Grid>
  );
};

ScenarioPanel.propTypes = {};

export default ScenarioPanel;
