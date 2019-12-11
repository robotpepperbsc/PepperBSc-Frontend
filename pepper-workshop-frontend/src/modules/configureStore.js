import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import settingsReducer from "./Settings/settingsReducer";
import scenariosReducer from "./Scenarios/scenariosReducer";
import rootSaga from "./rootSaga";
import errorsReducer from "./Errors/errorReducer";
import mediaReducer from "./Media/mediaReducer";
import recordingsReducer from "./Recordings/recordingsReducer";
import sequencesReducer from "./Sequences/sequencesReducer";
import utilsReducer from "./Utils/utilsReducer";

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
      errors: errorsReducer,
      sequences: sequencesReducer,
      utils: utilsReducer
    }),
    composeEnhancers(applyMiddleware(...middleware))
  );

  sagaMiddleware.run(rootSaga);
  return store;
};
