import React from "react";
import PropTypes from "prop-types";

const ScenarioListItem = ({ name, description, date, deleteScenario }) => {
  const handleDeleteScenario = () => {
    deleteScenario(name);
  };

  const handleEditScenario = () => {
    //history push
  };

  return (
    <div>
      {name}
      {description}
      {date}
      <button onClick={handleEditScenario}>edit</button>
      <button onClick={handleDeleteScenario}>delete</button>
    </div>
  );
};

ScenarioListItem.propTypes = {};

export default ScenarioListItem;
