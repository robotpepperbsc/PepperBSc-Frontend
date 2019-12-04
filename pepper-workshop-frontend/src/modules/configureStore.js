import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import settingsReducer from "./Settings/settingsReducer";
import scenariosReducer from "./Scenarios/scenariosReducer";
import rootSaga from "./rootSaga";
import errorsReducer from "./Errors/errorReducer";
import mediaReducer from "./Media/mediaReducer";
import recordingsReducer from "./Recordings/recordingsReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export default () => {
  const store = createStore(
    combineReducers({
      settings: settingsReducer,
      scenarios: scenariosReducer,
      media: mediaReducer,
      recordings: recordingsReducer,
      errors: errorsReducer
    }),
    composeEnhancers(applyMiddleware(...middleware))
  );

  sagaMiddleware.run(rootSaga);
  return store;
};
