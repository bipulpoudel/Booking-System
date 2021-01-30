import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOAD_FAIL,
  USER_LOAD_SUCCESS,
  USER_LOAD_REQUEST,
} from "@redux/types";

export const userLoginReducer = (
  state = { isLoading: false, errors: [] },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case USER_LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };

    default:
      return state;
  }
};

export const userReducer = (
  state = { isAuthenticated: false, user: null, token: null },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case USER_LOAD_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload.user,
        token: payload.token,
        isLoading: false,
      };

    case USER_LOAD_FAIL:
      return {
        isLoading: false,
        errors: payload,
      };

    default:
      return state;
  }
};
