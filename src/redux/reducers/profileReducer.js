import {
  CREATE_PROFILE_REQUEST,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
} from "@redux/types";

export const createProfileReducer = (state = { isLoading: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case CREATE_PROFILE_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export const updateProfileReducer = (state = { isLoading: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case UPDATE_PROFILE_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
