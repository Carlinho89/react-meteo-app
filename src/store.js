import { createStore, applyMiddleware, compose } from 'redux';

// Middelwares
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';

// Sagas
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers = [];
const middleware = [
    sagaMiddleware
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

// run the root saga
sagaMiddleware.run(rootSaga);

export  default store;
