import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "@redux/types";

export const userLoginReducer = (
  state = { isLoading: false, errors: [] },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        isLoading: true,
      };

    case USER_LOGIN_SUCCESS:
      return {
        isLoading: false,
      };

    case USER_LOGIN_FAIL:
      return {
        isLoading: false,
        errors: payload,
      };

    default:
      return state;
  }
};
