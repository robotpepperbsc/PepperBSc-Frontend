export const GET_SCENARIOS = "GET_SCENARIOS";
export const SCENARIOS_RECEIVED = "SCENARIOS_RECEIVED";
export const SET_ACTIVE_SCENARIO = "SET_ACTIVE_SCENARIO";
export const DELETE_SCENARIO = "DELETE_SCENARIO";
export const SET_ACTIVE_SCENARIO_SUCCESS = "SET_ACTIVE_SCENARIO_SUCCESS";
export const START_NEW_SCENARIO = "START_NEW_SCENARIO";
export const UPDATE_ACTIVE_SCENARIO = "UPDATE_ACTIVE_SCENARIO";
export const SAVE_EDITED_ACTION = "SAVE_EDITED_ACTION";
export const SET_EDITED_ACTION = "SET_EDITED_ACTION";
export const RUN_SCENARIO = "RUN_SCENARIO";
export const SAVE_SCENARIO = "SAVE_SCENARIO";

export const runScenario = (name, start, end) => ({
  type: RUN_SCENARIO,
  name,
  start,
  end
});

export const saveScenario = scenario => ({
  type: SAVE_SCENARIO,
  scenario
});

export const setEditedAction = (index, action) => ({
  type: SET_EDITED_ACTION,
  index,
  action
});

export const saveEditedAction = () => ({
  type: SAVE_EDITED_ACTION
});

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

export const setNewScenario = () => ({
  type: START_NEW_SCENARIO
});

export const updateActiveScenario = (field, value) => ({
  type: UPDATE_ACTIVE_SCENARIO,
  field,
  value
});
