import {
    GET_SCENARIOS,
    SAVE_EDITED_ACTION,
    SCENARIOS_RECEIVED,
    SET_ACTIVE_SCENARIO,
    SET_ACTIVE_SCENARIO_SUCCESS,
    SET_EDITED_ACTION,
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
  currentEditedAction: null,
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
    case SET_EDITED_ACTION:
      return {
        ...state,
        currentEditedAction: action.action,
        currentEditedActionIndex: action.index
      };
    case SAVE_EDITED_ACTION:
      const newActionList = [...state.activeScenario.actions];
      newActionList[action.index] = action.action;
      return {
        ...state,
        activeScenario: Object.assign(
          {},
          { ...state.activeScenario },
          { actions: newActionList }
        ),
        currentEditedAction: null
      };
    default:
      return state;
  }
}
