import { createStore } from "redux";

import rootReducer from "./Reducers";

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);
  return store;
}