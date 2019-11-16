import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ScenarioHeader from "./ScenarioHeader";

const ScenarioPanel = ({ activeScenario, postScenario, modifyScenario }) => {
  const [values, setValues] = useState({
    newScenario: true,
    name: "",
    description: "",
    actions: []
  });

  useEffect(() => {
    setValues({
      newScenario: false
    });
  }, [activeScenario]);

  const handleNewScenario = () => {
    setValues({
      newScenario: true,
      name: "",
      description: "",
      actions: []
    });
  };

  const handlePostScenario = () => {
    const scenario = {
      name: values.name,
      description: values.description,
      actions: values.actions
    };
    values.newScenario ? postScenario(scenario) : modifyScenario(scenario);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <button onClick={handleNewScenario}>new scenario</button>
      <ScenarioHeader
        name={activeScenario.name}
        description={activeScenario.description}
        handleNameChange={handleChange}
        handleDescriptionChange={handleChange}
      />
      <button onCLick={handlePostScenario}>save scenario</button>
    </div>
  );
};

ScenarioPanel.propTypes = {};

export default ScenarioPanel;
