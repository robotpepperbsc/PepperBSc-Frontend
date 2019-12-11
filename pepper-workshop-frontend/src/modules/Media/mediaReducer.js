import { GET_MEDIA, MEDIA_RECEIVED } from "./actions";

const initialState = {
  photos: [],
  videos: [],
  loading: false
};

export default function mediaReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MEDIA:
      return { ...state, loading: true };
    case MEDIA_RECEIVED:
      return {
        ...state,
        photos: action.payload.photos,
        videos: action.payload.videos,
        loading: false
      };
    default:
      return state;
  }
}
