import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" && window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
    ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({})
    : compose;
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware /*other middleware*/)
  /* other store enhancers if any */
);

const store = createStore(reducer, enhancer);

export default store;
