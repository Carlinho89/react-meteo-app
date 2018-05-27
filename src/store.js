import { createStore, applyMiddleware, compose } from 'redux';

// Middelwares
// TO-DO
import rootReducer from './reducers';

const initialState = {};
const enhancers = [];
const middleware = [
    // To-Do
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

export  default store;
