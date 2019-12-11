import { all, call, put, takeEvery } from "redux-saga/effects";
import * as api from "./api";
import { GET_SEQUENCES, SEQUENCES_RECEIVED, POST_SEQUENCE } from "./actions";
import { setError } from "../Errors/actions";

function* getSequences() {
  try {
    console.log("sss");
    const response = yield call(api.fetchSequences);
    console.log(response);
    yield put({ type: SEQUENCES_RECEIVED, payload: response.sequences });
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
