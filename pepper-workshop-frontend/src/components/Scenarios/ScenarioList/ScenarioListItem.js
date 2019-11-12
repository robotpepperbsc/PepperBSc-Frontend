import React from "react";
import PropTypes from "prop-types";

const ScenarioListItem = ({ scenario, deleteScenario, setActiveScenario }) => {
  const handleDeleteScenario = () => {
    deleteScenario(scenario.name);
  };

  const handleEditScenario = () => {
    //history push
  };

  const handleSetActiveScenario = () => {
    setActiveScenario(scenario);
  };

  return (
    <div onClick={handleSetActiveScenario}>
      {scenario.name}
      {scenario.description}
      {scenario.date}
      <button onClick={handleEditScenario}>edit</button>
      <button onClick={handleDeleteScenario}>delete</button>
    </div>
  );
};

ScenarioListItem.propTypes = {};

export default ScenarioListItem;
