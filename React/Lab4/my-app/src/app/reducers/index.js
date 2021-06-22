import { combineReducers } from "redux";
import { userDetailsReducer } from "./userDetails";
import { usersReducer } from "./users";

const rootReducer = combineReducers({
  users: usersReducer,
  userDetails: userDetailsReducer,
});

export default rootReducer;
