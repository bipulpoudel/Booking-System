import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOAD_FAIL,
  USER_LOAD_SUCCESS,
  USER_LOAD_REQUEST,
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
  USER_DETAIL_FAIL,
  UPDATE_USER_DETAILS,
} from "@redux/types";

export const userLoginReducer = (state = { isLoading: false }, action) => {
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
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export const userDetailReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case USER_DETAIL_SUCCESS:
      return {
        ...state,
        user: payload.user,
        isUpdate: payload.isUpdate,
        isLoading: false,
      };

    case USER_DETAIL_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    case UPDATE_USER_DETAILS:
      return {
        ...state,
        user: {
          ...state.user,
          profile: payload,
        },
        isUpdate: true,
      };

    default:
      return state;
  }
};
