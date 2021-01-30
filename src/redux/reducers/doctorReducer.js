import {
  ADD_DOCTOR_REQUEST,
  ADD_DOCTOR_SUCCESS,
  ADD_DOCTOR_FAIL,
} from "@redux/types";

export const addDoctorReducer = (
  state = { isLoading: false, errors: [] },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_DOCTOR_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ADD_DOCTOR_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case ADD_DOCTOR_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };

    default:
      return state;
  }
};
