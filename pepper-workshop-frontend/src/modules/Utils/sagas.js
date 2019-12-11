import { all, call, put, takeEvery } from "redux-saga/effects";
import * as api from "./api";
import {
  GET_STATUS_REQUEST,
  GET_STATUS_REQUEST_SUCCESS,
  CLEAR_QUEUE
} from "./actions";
import { setError } from "../Errors/actions";

function* getStatus() {
  try {
    const status = yield call(api.fetchStatus);
    yield put({ type: GET_STATUS_REQUEST_SUCCESS, payload: status });
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}

function* watchGetStatus() {
  yield takeEvery(GET_STATUS_REQUEST, getStatus);
}

function* clearQueue() {
  try {
    const response = yield call(api.clearQueue);
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}

function* watchClearQueue() {
  yield takeEvery(CLEAR_QUEUE, clearQueue);
}

export default function* utilsSagas() {
  yield all([watchGetStatus(), watchClearQueue()]);
}
