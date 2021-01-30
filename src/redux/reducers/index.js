import { combineReducers } from "redux";

import { userLoginReducer, userReducer } from "./userReducer";

export default combineReducers({
  userLogin: userLoginReducer,
  user: userReducer,
});
