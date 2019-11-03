import { all } from "redux-saga/effects";
import settingsSaga from "./Settings/sagas";

export default function* rootSaga() {
  yield all([settingsSaga()]);
}
