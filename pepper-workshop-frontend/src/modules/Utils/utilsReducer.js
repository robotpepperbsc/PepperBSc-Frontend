import { GET_STATUS_REQUEST, GET_STATUS_REQUEST_SUCCESS } from "./actions";

const initialState = {
  battery: 0,
  is_recording: false,
  is_queue_empty: false,
  loading: false
};

export default function utilsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STATUS_REQUEST:
      return { ...state, loading: true };
    case GET_STATUS_REQUEST_SUCCESS:
      return Object.assign({}, { loading: false }, { ...action.payload });
    default:
      return state;
  }
}
