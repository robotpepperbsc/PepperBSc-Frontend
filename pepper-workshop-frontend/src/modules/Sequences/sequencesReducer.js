import { GET_SEQUENCES, SEQUENCES_RECEIVED } from "./actions";

const initialState = {
  sequences: [],
  loading: false,
  isRecording: false
};

export default function sequencesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SEQUENCES:
      return { ...state, loading: true };
    case SEQUENCES_RECEIVED:
      return { ...state, sequences: action.payload, loading: false };
    default:
      return state;
  }
}
