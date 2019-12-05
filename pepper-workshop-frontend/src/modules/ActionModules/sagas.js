import { all, call, put, takeEvery } from "redux-saga/effects";
import * as api from "./api";
import {
  QUEUE_MEDIA,
  QUEUE_MOVE,
  QUEUE_SEQUENCE,
  QUEUE_SPEECH
} from "./actions";
import { setError } from "../Errors/actions";

function* queueAction(action) {
  console.log(action);
  try {
    yield call(api.queueAction, action.pepperAction);
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}

function* watchQueueSpeech() {
  yield takeEvery(QUEUE_SPEECH, queueAction);
}

function* watchQueueMove() {
  yield takeEvery(QUEUE_MOVE, queueAction);
}

function* watchQueueSequence() {
  yield takeEvery(QUEUE_SEQUENCE, queueAction);
}

function* watchQueueMedia() {
  yield takeEvery(QUEUE_MEDIA, queueAction);
}

export default function* actionSagas() {
  yield all([
    watchQueueSpeech(),
    watchQueueMove(),
    watchQueueSequence(),
    watchQueueMedia()
  ]);
}
