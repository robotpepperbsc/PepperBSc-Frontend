export const GET_SCENARIOS = "GET_SCENARIOS";
export const SCENARIOS_RECEIVED = "SCENARIOS_RECEIVED";
export const SET_ACTIVE_SCENARIO = "SET_ACTIVE_SCENARIO";

export const getScenarios = () => ({
  type: GET_SCENARIOS
});

export const setActiveScenario = scenario => ({
  type: SET_ACTIVE_SCENARIO,
  scenario
});
