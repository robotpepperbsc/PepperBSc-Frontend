import { all, call, put, takeEvery } from "redux-saga/effects";
import * as api from "./api";
import { GET_SEQUENCES, SEQUENCES_RECEIVED, POST_SEQUENCE } from "./actions";
import { setError } from "../Errors/actions";

function* getSequences() {
  try {
    const sequences = yield call(api.fetchSequences);
    yield put({ type: SEQUENCES_RECEIVED, payload: sequences });
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}

function* watchGetSequences() {
  yield takeEvery(GET_SEQUENCES, getSequences);
}

export default function* sequenceSagas() {
  yield all([watchGetSequences()]);
}
