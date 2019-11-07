import { put, takeEvery, all, call } from "redux-saga/effects";
import * as api from "./api";
import { GET_SCENARIOS, SCENARIOS_RECEIVED } from "./actions";
import { setError } from "../Errors/actions";
function* getScenarios() {
  try {
    const scenarios = [
      {
        name: "scenario1",
        description: "cos tam",
        last_modification_date: "2019-02-10"
      },
      {
        name: "scenario2",
        description: "jejejejeej",
        last_modification_date: "2019-02-13"
      }
    ];
    yield put({ type: SCENARIOS_RECEIVED, payload: scenarios });
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}

function* watchGetSCenarios() {
  yield takeEvery(GET_SCENARIOS, getScenarios);
}

export default function* scenariosSagas() {
  yield all([watchGetSCenarios()]);
}
