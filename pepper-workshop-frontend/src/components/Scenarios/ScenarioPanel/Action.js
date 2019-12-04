import React from "react";
import {IconButton, ListItem, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import {pepperActionType} from "../../Improvisation/pepperActionService";

const Action = ({ index, action, editAction, deleteAction }) => {
  const getName = () => {
    return action.type || "";
  };
  const getSecondary = () => {
    switch (action.type) {
      case pepperActionType.speech:
        return (
          <div>
            <p>{action.text}</p>
            <p>{`volume: ${action.volume}, speed: ${action.speechSpeed}, language: ${action.language}`}</p>
          </div>
        );
      case pepperActionType.generic:
        return action.command;
      case pepperActionType.sequence:
      case pepperActionType.media:
        return action.name;
      default:
        return "";
    }
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
