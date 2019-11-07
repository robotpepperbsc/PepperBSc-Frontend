import { all } from "redux-saga/effects";
import settingsSaga from "./Settings/sagas";
import scenariosSagas from "./Scenarios/sagas";
import mediaSagas from "./Media/sagas";
import actionSagas from "./ActionModules/sagas";

export default function* rootSaga() {
  yield all([settingsSaga(), scenariosSagas(), mediaSagas(), actionSagas()]);
}
