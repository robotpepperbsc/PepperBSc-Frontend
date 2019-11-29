import {
  GET_SCENARIOS,
  SCENARIOS_RECEIVED,
  SET_ACTIVE_SCENARIO,
  SET_ACTIVE_SCENARIO_SUCCESS,
  START_NEW_SCENARIO,
  UPDATE_ACTIVE_SCENARIO
} from "./actions";

const initialState = {
  scenarios: [],
  activeScenario: {
    name: "",
    description: "",
    actions: []
  },
  loading: false
};

export default function scenariosReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SCENARIOS:
      return { ...state, loading: true };
    case SCENARIOS_RECEIVED:
      return { ...state, scenarios: action.payload, loading: false };
    case SET_ACTIVE_SCENARIO:
      return { ...state, loading: true };
    case SET_ACTIVE_SCENARIO_SUCCESS:
      return {
        ...state,
        activeScenario: Object.assign({}, { ...action.scenario })
      };
    case START_NEW_SCENARIO:
      return {
        ...state,
        activeScenario: {
          name: "",
          description: "",
          actions: [],
          isNew: true
        }
      };
    case UPDATE_ACTIVE_SCENARIO:
      const activeScenario = state.activeScenario;
      return {
        ...state,
        activeScenario: Object.assign(
          {},
          { ...activeScenario },
          {
            [action.field]: action.value
          }
        )
      };
    default:
      return state;
  }
}
