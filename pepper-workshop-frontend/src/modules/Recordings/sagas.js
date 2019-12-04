import {all, call, put, takeEvery} from "redux-saga/effects";
import * as api from "./api";
import {GET_RECORDINGS, RECORDINGS_RECEIVED} from "./actions";
import {setError} from "../Errors/actions";

function* getRecordings() {
  try {
    const recordings = yield call(api.fetchRecordings);
    yield put({ type: RECORDINGS_RECEIVED, payload: recordings });
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}

function* watchGetRecordings() {
  yield takeEvery(GET_RECORDINGS, getRecordings);
}

export default function* recordingsSagas() {
  yield all([watchGetRecordings()]);
}
