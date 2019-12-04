import {GET_MEDIA, MEDIA_RECEIVED} from "./actions";

const initialState = {
  media: [],
  loading: false
};

export default function mediaReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MEDIA:
      return { ...state, loading: true };
    case MEDIA_RECEIVED:
      return { ...state, media: action.payload, loading: false };
    default:
      return state;
  }
}
