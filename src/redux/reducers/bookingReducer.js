import { ADD_USER_DETAILS, ADD_EVENTS_DETAILS } from "@redux/types";

export const bookReducer = (state = { user_details: {} }, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_USER_DETAILS:
      return {
        ...state,
        user_details: payload,
      };

    case ADD_EVENTS_DETAILS:
      return {
        ...state,
        ...payload,
      };

    case "ADD_EVENTS_SUCCESS":
      return {};

    default:
      return state;
  }
};
