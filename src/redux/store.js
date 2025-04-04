import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import routeReducer from "./reducers/routeReducer";
import { thunk } from 'redux-thunk';

const initialState = {};
const middleware = [thunk];

const store = createStore(
  routeReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;

// 