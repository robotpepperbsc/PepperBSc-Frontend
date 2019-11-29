import { put, takeEvery, all, call } from "redux-saga/effects";
import * as api from "./api";
import {
  QUEUE_SPEECH,
  QUEUE_MOVE,
  QUEUE_SEQUENCE,
  QUEUE_MEDIA
} from "./actions";
import { setError } from "../Errors/actions";

function* queueSpeech(action) {
  try {
    yield call(api.queueSpeech, action.pepperAction);
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}

function* queueMove(action) {
  try {
    yield call(api.queueMove, action.pepperAction);
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}

function* queueSequence(action) {
  const { name } = action;
  try {
    yield call(api.queueSequence, action.pepperAction);
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}

function* queueMedia(action) {
  try {
    yield call(api.queueMedia, action.pepperAction);
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}

function* watchQueueSpeech() {
  yield takeEvery(QUEUE_SPEECH, queueSpeech);
}

function* watchQueueMove() {
  yield takeEvery(QUEUE_MOVE, queueMove);
}

function* watchQueueSequence() {
  yield takeEvery(QUEUE_SEQUENCE, queueSequence);
}

function* watchQueueMedia() {
  yield takeEvery(QUEUE_MEDIA, queueMedia);
}

export default function* actionSagas() {
  yield all([
    watchQueueSpeech(),
    watchQueueMove(),
    watchQueueSequence(),
    watchQueueMedia()
  ]);
}
