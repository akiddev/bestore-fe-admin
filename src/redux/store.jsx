import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const intialState = {};

function configAppStore(preLoadedState) {
  const store = configureStore({
    reducer: rootReducer,
    preLoadedState: preLoadedState,
  });

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./rootReducer");

    store.replaceReducer(rootReducer);
  }
  return store;
}

export default configAppStore(intialState);
