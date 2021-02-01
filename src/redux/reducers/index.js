import { combineReducers } from "redux";
import {
  userLoginReducer,
  userReducer,
  userDetailReducer,
} from "./userReducer";
import { addDoctorReducer, doctorListReducer } from "./doctorReducer";
import { createProfileReducer, updateProfileReducer } from "./profileReducer";

//types
import { USER_LOGOUT } from "@redux/types";
import storage from "redux-persist/lib/storage";
import { toast } from "react-toastify";

const appReducer = combineReducers({
  userLogin: userLoginReducer,
  user: userReducer,
  userDetail: userDetailReducer,
  addDoctor: addDoctorReducer,
  doctorList: doctorListReducer,
  createProfile: createProfileReducer,
  updateProfile: updateProfileReducer,
});

//Root Reducer ot logout and cleat all the state from redux.
const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    localStorage.removeItem("token");

    toast.success("Logged out successfully");

    storage.removeItem("persist:Pro");
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
