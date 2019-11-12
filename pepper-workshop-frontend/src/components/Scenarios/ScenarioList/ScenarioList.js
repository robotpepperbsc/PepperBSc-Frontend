import React, { Component } from "react";
import PropTypes from "prop-types";
import ScenarioListItem from "./ScenarioListItem";

export default class ScenarioList extends Component {
  static propTypes = {
    prop: PropTypes
  };

  componentDidMount() {
    this.props.getScenarios();
  }

  render() {
    const { scenarios, deleteScenario, setActiveScenario } = this.props;
    return (
      <div>
        {scenarios.map(scenario => {
          return (
            <ScenarioListItem
              scenario={scenario}
              deleteScenario={deleteScenario}
              setActiveScenario={setActiveScenario}
            />
          );
        })}
      </div>
    );
  }
}
