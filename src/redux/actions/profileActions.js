import axios from "axios";
import { API_URL, getConfig } from "@config/index.js";
import { toast } from "react-toastify";

//types imports
import {
  CREATE_PROFILE_REQUEST,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_FAIL,
  UPDATE_USER_DETAILS,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
} from "@redux/types";

export const createProfile = (formData, userId) => async (dispatch) => {
  dispatch({ type: CREATE_PROFILE_REQUEST });

  const body = JSON.stringify(formData);

  try {
    const response = await axios.post(
      `${API_URL}/profiles/create/${userId}`,
      body,
      getConfig()
    );

    dispatch({ type: UPDATE_USER_DETAILS, payload: response.data });

    dispatch({
      type: CREATE_PROFILE_SUCCESS,
    });

    toast.success("Profile created successfully!");
  } catch (err) {
    dispatch({
      type: CREATE_PROFILE_FAIL,
    });

    err?.response?.data?.errors.map((message) => toast.error(message));
  }
};

export const updateProfile = (formData, profileId) => async (dispatch) => {
  dispatch({ type: UPDATE_PROFILE_REQUEST });

  const body = JSON.stringify(formData);

  try {
    const response = await axios.put(
      `${API_URL}/profiles/update/${profileId}`,
      body,
      getConfig()
    );

    dispatch({ type: UPDATE_USER_DETAILS, payload: response.data });

    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
    });

    toast.success("Profile updated successfully!");
  } catch (err) {
    console.log(err);

    dispatch({
      type: UPDATE_PROFILE_FAIL,
    });

    err?.response?.data?.errors.map((message) => toast.error(message));
  }
};
