import React from "react";
import PropTypes from "prop-types";
import ScenarioListItem from "./ScenarioListItem";

function ScenarioList(props) {
  const { scenarios } = props;
  return (
    <div>
      {scenarios.map(scenario => {
        return (
          <ScenarioListItem
            name={scenario.name}
            description={scenario.description}
            date={scenario.date}
          ></ScenarioListItem>
        );
      })}
    </div>
  );
}

ScenarioList.propTypes = {};

export default ScenarioList;
