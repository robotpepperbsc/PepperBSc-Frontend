import React from "react";
import Action from "./Action";
import {List} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  }
}));

const ScenarioActionList = ({ actions, editAction, deleteAction }) => {
  const classes = useStyles();
  return (
    <List classes={classes}>
      {actions.map((action, index) => (
        <Action
          index={index}
          action={action}
          editAction={editAction}
          deleteAction={deleteAction}
        />
      ))}
    </List>
  );
};

ScenarioActionList.propTypes = {};

export default ScenarioActionList;
