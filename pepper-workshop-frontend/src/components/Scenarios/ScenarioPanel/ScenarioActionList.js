import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Task from "./Action";
import Action from "./Action";
import { List } from "@material-ui/core";

const ScenarioActionList = ({ actions }) => {
  return (
    <List>
      {actions.map((action, index) => (
        <Action index={index} {...action} />
      ))}
    </List>
  );
};

ScenarioActionList.propTypes = {};

export default ScenarioActionList;
