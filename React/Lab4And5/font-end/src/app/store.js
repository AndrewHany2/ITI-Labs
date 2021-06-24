import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userListReducer } from "./reducers/users";

const rootReducer = combineReducers({
  users: userListReducer,
});

const middlewares = [thunk];
const createStoreWithMW = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMW(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
