import {GET_RECORDINGS, RECORDINGS_RECEIVED} from "./actions";

const initialState = {
  recordings: [],
  loading: false,
  isRecording: false
};

export default function recordingsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECORDINGS:
      return { ...state, loading: true };
    case RECORDINGS_RECEIVED:
      return { ...state, recordings: action.payload, loading: false };
    default:
      return state;
  }
}
