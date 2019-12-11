import { all, call, put, takeEvery } from "redux-saga/effects";
import * as api from "./api";
import { GET_MEDIA, MEDIA_RECEIVED } from "./actions";
import { setError } from "../Errors/actions";

function* getMedia() {
  try {
    const media = yield call(api.fetchMedia);
    console.log(media);
    yield put({ type: MEDIA_RECEIVED, payload: media });
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}

function* watchGetMedia() {
  yield takeEvery(GET_MEDIA, getMedia);
}

export default function* mediaSagas() {
  yield all([watchGetMedia()]);
}
