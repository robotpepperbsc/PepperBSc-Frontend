import React, {Fragment, useState} from "react";
import ScenarioHeader from "./ScenarioHeader";
import {makeStyles} from "@material-ui/core/styles";
import {Button, Grid, Paper, Tab, Tabs} from "@material-ui/core";
import Popup from "reactjs-popup";
import ImprovisationSpeech from "../../Improvisation/ImprovisationSpeech/ImprovisationSpeech";
import ScenarioActionList from "./ScenarioActionList";
import ImprovisationMoveList from "../../Improvisation/ImprovisationMoves/ImprovisationMoveList/ImprovisationMoveList";
import ImprovisationMoveManual
    from "../../Improvisation/ImprovisationMoves/ImprovisationMoveManual/ImprovisationMoveManual";
import MediaContainer from "../../ Media/MediaContainer";
import {pepperActionType} from "../../Improvisation/pepperActionService";
import "./ScenarioPanel.scss";

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const ScenarioPanel = ({
  activeScenario,
  currentEditedAction,
  setEditedAction,
  saveEditedAction,
  setNewScenario,
  updateActiveScenario,
  postScenario,
  modifyScenario
}) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    open: false,
    editedActionType: null
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

  const handleEditAction = (index, action) => {
    console.log(action);
    setEditedAction(index, action);
    handleOpen();
  };

  const handleSaveEditedAction = () => {
    saveEditedAction();
    handleClose();
  };

  const handleDeleteAction = index => {
    const newActionsArray = [...activeScenario.actions];
    newActionsArray.splice(index, 1);
    updateActiveScenario("actions", newActionsArray);
  };

  const setEditedActionType = type => {
    console.log(type);
    setValues({ ...values, editedActionType: type });
  };

  return (
    <Grid container item xs={6}>
      <Button
        fullWidth
        variant="contained"
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
          className={classes.submit}
          onClick={handleOpen}
        >
          add action
        </Button>
        <ScenarioActionList
          actions={activeScenario.actions}
          editAction={handleEditAction}
          deleteAction={handleDeleteAction}
        />
        <Popup
          className={"scenario-add-action-popup"}
          onClose={handleClose}
          open={values.open}
          modal
        >
          <Paper>
            <Tabs
              value={values.editedActionType}
              onChange={setValues}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab
                value={pepperActionType.speech}
                label={"speech"}
                onClick={() => setEditedActionType(pepperActionType.speech)}
              />
              <Tab
                value={pepperActionType.sequence}
                label={"sequence"}
                onClick={() => setEditedActionType(pepperActionType.sequence)}
              />
              <Tab
                value={pepperActionType.generic}
                label={"generic move"}
                onClick={() => setEditedActionType(pepperActionType.generic)}
              />
              <Tab
                value={pepperActionType.media}
                label={"media"}
                onClick={() => setEditedActionType(pepperActionType.media)}
              />
            </Tabs>
            {values.editedActionType === pepperActionType.speech ? (
              <ImprovisationSpeech
                saveEditedAction={handleSaveEditedAction}
                action={currentEditedAction}
                addActionToScenario={addActionToScenario}
              />
            ) : null}
            {values.editedActionType === pepperActionType.sequence ? (
              <ImprovisationMoveList
                saveEditedAction={handleSaveEditedAction}
                action={currentEditedAction}
                addActionToScenario={addActionToScenario}
              />
            ) : null}
            {values.editedActionType === pepperActionType.generic ? (
              <ImprovisationMoveManual
                saveEditedAction={handleSaveEditedAction}
                action={currentEditedAction}
                addActionToScenario={addActionToScenario}
              />
            ) : null}

            {values.editedActionType === pepperActionType.media ? (
              <MediaContainer
                saveEditedAction={handleSaveEditedAction}
                action={currentEditedAction}
                addActionToScenario={addActionToScenario}
              />
            ) : null}

            <Button
              fullWidth
              variant={"contained"}
              className={classes.submit}
              onClick={handleClose}
            >
              close modal
            </Button>
          </Paper>
        </Popup>

        <Button
          type="submit"
          fullWidth
          variant={"contained"}
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
