import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import ScenarioHeader from "./ScenarioHeader";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import Popup from "reactjs-popup";
import ImprovisationSpeech from "../../Improvisation/ImprovisationSpeech/ImprovisationSpeech";
import ScenarioActionList from "./ScenarioActionList";

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const ScenarioPanel = ({
  activeScenario,
  setNewScenario,
  updateActiveScenario,
  postScenario,
  modifyScenario
}) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    open: false
  });

  const handleNewScenario = () => {
    setNewScenario();
  };

  const handlePostScenario = () => {
    values.newScenario
      ? postScenario(activeScenario)
      : modifyScenario(activeScenario);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    updateActiveScenario(name, value);
  };

  const handleOpen = () => {
    setValues({ ...values, open: true });
  };

  const handleClose = () => {
    setValues({ ...values, open: false });
  };

  const addActionToScenario = action => {
    const newActionsArray = [...activeScenario.actions, action];
    updateActiveScenario("actions", newActionsArray);
    handleClose();
  };

  return (
    <Grid container item xs={6}>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleNewScenario}
      >
        {!activeScenario.isNew ? "new scenario" : "clear scenario"}
      </Button>
      <Fragment>
        <ScenarioHeader
          name={values.name}
          description={values.description}
          handleNameChange={handleChange}
          handleDescriptionChange={handleChange}
        />
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit}
          onClick={handleOpen}
        >
          add action
        </Button>
        <ScenarioActionList actions={activeScenario.actions} />
        <Popup onClose={handleClose} open={values.open} modal>
          <div>
            <ImprovisationSpeech addActionToScenario={addActionToScenario} />
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={handleClose}
            >
              close modal
            </Button>
          </div>
        </Popup>

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
    </Grid>
  );
};

ScenarioPanel.propTypes = {};

export default ScenarioPanel;
