import axios from "axios";
import { API_URL, getConfig } from "@config/index.js";
import { toast } from "react-toastify";

//types imports
import {
  CREATE_TIMELINE_REQUEST,
  CREATE_TIMELINE_SUCCESS,
  CREATE_TIMELINE_FAIL,
  TIMELINE_DETAIL_REQUEST,
  TIMELINE_DETAIL_SUCCESS,
  TIMELINE_DETAIL_FAIL,
  UPDATE_TIMELINE_REQUEST,
  UPDATE_TIMELINE_SUCCESS,
  UPDATE_TIMELINE_FAIL,
  UPDATE_TIMELINE_DETAILS,
} from "@redux/types";

export const createTimeline = (receivedData) => async (dispatch) => {
  dispatch({ type: CREATE_TIMELINE_REQUEST });

  try {
    const response = await axios.post(
      `${API_URL}/timelines/create`,
      JSON.stringify(receivedData),
      getConfig()
    );

    dispatch({ type: UPDATE_TIMELINE_DETAILS, payload: response.data });

    dispatch({
      type: CREATE_TIMELINE_SUCCESS,
    });

    toast.success("Timeline created successfully!");
  } catch (err) {
    dispatch({
      type: CREATE_TIMELINE_FAIL,
    });

    err?.response?.data?.errors.map((message) => toast.error(message));
  }
};

export const timelineDetail = () => async (dispatch) => {
  dispatch({ type: TIMELINE_DETAIL_REQUEST });

  try {
    const response = await axios.get(`${API_URL}/timelines/me`, getConfig());

    dispatch({
      type: TIMELINE_DETAIL_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: TIMELINE_DETAIL_FAIL,
    });

    err?.response?.data?.errors.map((message) => toast.warn(message));
  }
};

export const updateTimeline = (receivedData, timelineId) => async (
  dispatch
) => {
  dispatch({ type: UPDATE_TIMELINE_REQUEST });

  try {
    const response = await axios.put(
      `${API_URL}/timelines/update/${timelineId}`,
      JSON.stringify(receivedData),
      getConfig()
    );

    dispatch({ type: UPDATE_TIMELINE_DETAILS, payload: response.data });

    dispatch({
      type: UPDATE_TIMELINE_SUCCESS,
    });

    toast.success("Timeline updated successfully!");
  } catch (err) {
    dispatch({
      type: UPDATE_TIMELINE_FAIL,
    });

    err?.response?.data?.errors.map((message) => toast.error(message));
  }
};
