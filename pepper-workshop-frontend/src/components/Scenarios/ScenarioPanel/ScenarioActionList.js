import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Task from "./Task";

const ScenarioActionList = ({ tasks }) => {
  return (
    <Fragment>
      {tasks.map(task => (
        <Task task={task} />
      ))}
    </Fragment>
  );
};

ScenarioActionList.propTypes = {};

export default ScenarioActionList;
