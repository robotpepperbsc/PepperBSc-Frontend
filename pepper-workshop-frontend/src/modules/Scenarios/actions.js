export const GET_SCENARIOS = "GET_SCENARIOS";
export const SCENARIOS_RECEIVED = "SCENARIOS_RECEIVED";
export const SET_ACTIVE_SCENARIO = "SET_ACTIVE_SCENARIO";
export const DELETE_SCENARIO = "DELETE_SCENARIO";
export const SET_ACTIVE_SCENARIO_SUCCESS = "SET_ACTIVE_SCENARIO_SUCCESS";

export const getScenarios = () => ({
  type: GET_SCENARIOS
});

export const setActiveScenario = name => ({
  type: SET_ACTIVE_SCENARIO,
  name
});

export const deleteScenario = name => ({
  type: DELETE_SCENARIO,
  name
});

export const setActiveScenarioSuccess = scenario => ({
  type: SET_ACTIVE_SCENARIO_SUCCESS,
  scenario
});
