import { combineReducers } from "redux";
import { userLoginReducer, userReducer } from "./userReducer";
import { addDoctorReducer } from "./doctorReducer";

//types
import { USER_LOGOUT } from "@redux/types";
import storage from "redux-persist/lib/storage";

const appReducer = combineReducers({
  userLogin: userLoginReducer,
  user: userReducer,
  addDoctor: addDoctorReducer,
});

//Root Reducer ot logout and cleat all the state from redux.
const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    storage.removeItem("persist:Pro");
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
