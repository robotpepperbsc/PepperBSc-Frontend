import {all, call, put, takeEvery} from "redux-saga/effects";
import * as api from "./api";
import {GET_NOTES, NOTES_RECEIVED} from "./actions";
import {setError} from "../Errors/actions";

function* getNotes() {
  try {
    const notes = yield call(api.fetchNotes);
    yield put({ type: NOTES_RECEIVED, payload: notes });
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}

function* watchGetNotes() {
  yield takeEvery(GET_NOTES, getNotes);
}

export default function* settingsSagas() {
  yield all([watchGetNotes()]);
}
