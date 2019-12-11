import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as api from "./api";
import {
  DELETE_SCENARIO,
  GET_SCENARIOS,
  SCENARIOS_RECEIVED,
  SET_ACTIVE_SCENARIO,
  setActiveScenarioSuccess,
  RUN_SCENARIO
} from "./actions";
import { setError } from "../Errors/actions";

function* getScenarios() {
  try {
    const scenarios = yield call(api.fetchScenarios);
    yield put({ type: SCENARIOS_RECEIVED, payload: scenarios });
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}

function* updateActiveScenario(action) {
  try {
    const scenario = yield call(api.fetchScenario, action.name);

    yield put(setActiveScenarioSuccess(scenario));
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}

function* deleteScenario(action) {
  try {
    const response = yield call(api.deleteScenario, action.name);
    yield put(getScenarios());
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}

function* watchDeleteScenario() {
  yield takeLatest(DELETE_SCENARIO, deleteScenario);
}

function* watchGetSCenarios() {
  yield takeEvery(GET_SCENARIOS, getScenarios);
}

function* watchSetActiveScenario() {
  yield takeEvery(SET_ACTIVE_SCENARIO, updateActiveScenario);
}

function* runScenario(action) {
  try {
    const response = yield call(
      api.runScenario,
      action.name,
      action.start,
      action.end
    );
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}

function* watchRunScenario() {
  yield takeLatest(RUN_SCENARIO, runScenario);
}

export default function* scenariosSagas() {
  yield all([
    watchGetSCenarios(),
    watchSetActiveScenario(),
    watchDeleteScenario(),
    watchRunScenario()
  ]);
}
