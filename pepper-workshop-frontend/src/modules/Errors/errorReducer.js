import { SET_ERROR, CLEAR_ERRORS } from "./actions";

const initialState = {
  error: null
};

export default function errorsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.payload };
    case CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
}
