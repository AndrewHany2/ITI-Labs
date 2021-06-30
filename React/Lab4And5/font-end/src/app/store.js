import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  userListReducer,
  userCreateReducer,
  filteredUserListReducer,
  userDetailsReducer,
  userDeleteReducer,
  userEditReducer,
} from "./reducers/users";

const rootReducer = combineReducers({
  users: userListReducer,
  userCreate: userCreateReducer,
  filteredUsers: filteredUserListReducer,
  userDetails: userDetailsReducer,
  userDelete: userDeleteReducer,
  userEdit: userEditReducer,
});

const middlewares = [thunk];
const createStoreWithMW = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMW(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
