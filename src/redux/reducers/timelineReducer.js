import {
  CREATE_TIMELINE_REQUEST,
  CREATE_TIMELINE_SUCCESS,
  CREATE_TIMELINE_FAIL,
  TIMELINE_DETAIL_REQUEST,
  TIMELINE_DETAIL_SUCCESS,
  TIMELINE_DETAIL_FAIL,
  UPDATE_TIMELINE_DETAILS,
  UPDATE_TIMELINE_REQUEST,
  UPDATE_TIMELINE_SUCCESS,
  UPDATE_TIMELINE_FAIL,
} from "@redux/types";

export const createTimelineReducer = (state = { isLoading: false }, action) => {
  const { type } = action;
  switch (type) {
    case CREATE_TIMELINE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case CREATE_TIMELINE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case CREATE_TIMELINE_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export const timelineDetailReducer = (state = { isUpdate: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case TIMELINE_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case TIMELINE_DETAIL_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false,
        isUpdate: true,
      };

    case TIMELINE_DETAIL_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    case UPDATE_TIMELINE_DETAILS:
      return {
        ...state,
        data: payload,
        isUpdate: true,
      };

    default:
      return state;
  }
};

export const updateTimelineReducer = (state = { isLoading: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_TIMELINE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case UPDATE_TIMELINE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case UPDATE_TIMELINE_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
