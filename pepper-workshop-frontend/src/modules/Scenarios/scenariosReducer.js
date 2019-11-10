import { GET_SCENARIOS, SCENARIOS_RECEIVED } from "./actions";

const initialState = {
  scenarios: [],
  activeScenario: null,
  loading: false
};

export default function scenariosReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SCENARIOS:
      return { ...state, loading: true };
    case SCENARIOS_RECEIVED:
      return { ...state, scenarios: action.payload, loading: false };
    case SET_ACTIVE_SCENARIO:
      return { ...state, activeScenario: action.scenario };
    default:
      return state;
  }
}
