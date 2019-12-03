import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  GridListTile,
  Button,
  GridListTileBar,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PlayArrow from "@material-ui/icons/PlayArrow";

const ScenarioListItem = ({
  scenario,
  deleteScenario,
  setActiveScenario,
  runSCenario
}) => {
  const handleDeleteScenario = () => {
    deleteScenario(scenario.name);
  };

  const handleEditScenario = () => {
    setActiveScenario(scenario);
  };

  const handleSetActiveScenario = () => {
    setActiveScenario(scenario);
  };

  const handleRunScenario = () => {
    runSCenario(scenario);
  };

  return (
    <ListItem onClick={handleSetActiveScenario}>
      <ListItemText primary={scenario.name} secondary={scenario.description} />
      <ListItemSecondaryAction>
        <IconButton aria-label="edit" onClick={handleEditScenario}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={handleDeleteScenario}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="run" onClick={handleRunScenario}>
          <PlayArrow />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

ScenarioListItem.propTypes = {};

export default ScenarioListItem;
