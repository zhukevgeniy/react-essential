import { createStore } from "redux";
import rootReducer from "./reducer";

const configureStore = () => {
  return createStore(rootReducer);
};

const store = configureStore();

export default store;
