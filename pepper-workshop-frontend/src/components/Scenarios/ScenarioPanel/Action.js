import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const Action = ({ index, action, editAction, deleteAction }) => {
  const getName = () => {
    return action.type || "";
  };
  const getSecondary = () => {
    return action.text || action.name;
  };

  const handleEditAction = () => {
    editAction(index, action);
  };

  const handleDeleteAction = () => {
    deleteAction(index);
  };

  return (
    <ListItem onClick={handleEditAction}>
      <ListItemText primary={getName()} secondary={getSecondary()} />
      <ListItemSecondaryAction>
        <IconButton aria-label="edit" onClick={handleEditAction}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={handleDeleteAction}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

Action.propTypes = {};

export default Action;
