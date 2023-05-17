import { combineReducers } from "redux";
import categoryReducer from "./reducers/categoryReducer";

const rootReducer = combineReducers({
  categoryReducer,
});

export default rootReducer;
