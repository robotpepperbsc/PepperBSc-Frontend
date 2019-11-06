import React from "react";
import PropTypes from "prop-types";

function ScenarioList(props) {
  const { scenarios } = props;
  return (
    <div>
      {scenarios.map(scenario => {
        return <div>xd</div>;
      })}
    </div>
  );
}

ScenarioList.propTypes = {};

export default ScenarioList;
