import { combineReducers } from "redux";

import { userLoginReducer, userReducer } from "./userReducer";

import { addDoctorReducer } from "./doctorReducer";

export default combineReducers({
  userLogin: userLoginReducer,
  user: userReducer,
  addDoctor: addDoctorReducer,
});
