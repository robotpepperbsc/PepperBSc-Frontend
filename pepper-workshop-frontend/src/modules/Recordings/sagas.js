import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as api from "./api";
import {
  GET_RECORDINGS,
  RECORDINGS_RECEIVED,
  START_RECORDING,
  STOP_RECORDING
} from "./actions";
import { setError } from "../Errors/actions";

function* getRecordings() {
  try {
    const recordings = yield call(api.fetchRecordings);
    yield put({ type: RECORDINGS_RECEIVED, payload: recordings });
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}

function* startRecording() {
  try {
    const response = yield call(api.startRecording);
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}

function* watchStartRecording() {
  yield takeLatest(START_RECORDING, startRecording);
}

function* stopRecording() {
  try {
    const response = yield call(api.stopRecording);
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}

function* watchStopRecording() {
  yield takeLatest(STOP_RECORDING, stopRecording);
}

function* watchGetRecordings() {
  yield takeEvery(GET_RECORDINGS, getRecordings);
}

export default function* recordingsSagas() {
  yield all([
    watchGetRecordings(),
    watchStartRecording(),
    watchStopRecording()
  ]);
}
