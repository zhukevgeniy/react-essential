import { combineReducers } from "redux";
import ViewReducer from "./view.reducer";

const RootReducer = combineReducers({
  view: ViewReducer
});


export default RootReducer;
