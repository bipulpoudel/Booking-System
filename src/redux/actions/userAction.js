import axios from "axios";
import { API_URL, getConfig } from "@config/index.js";
import { toast } from "react-toastify";

//types imports
import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOAD_SUCCESS,
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
  USER_DETAIL_FAIL,
} from "@redux/types";

export const loginUser = (formData) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });

  const body = JSON.stringify(formData);

  try {
    const response = await axios.post(
      `${API_URL}/users/login`,
      body,
      getConfig()
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
    });

    dispatch({ type: USER_LOAD_SUCCESS, payload: response.data });

    localStorage.setItem("token", response.data.token);
  } catch (err) {
    dispatch({
      type: USER_LOGIN_FAIL,
    });

    err?.response?.data?.errors.map((message) => toast.error(message));
  }
};

export const userDetail = (userId) => async (dispatch) => {
  dispatch({ type: USER_DETAIL_REQUEST });

  try {
    const response = await axios.get(
      `${API_URL}/users/detail/${userId}`,
      getConfig()
    );

    if (!response.data?.profile) {
      //no profie created previously
      toast.warn("No profile created for this user please create one");
    }

    //if profile data is already avaialable then update else no update
    dispatch({
      type: USER_DETAIL_SUCCESS,
      payload: {
        user: response.data,
        isUpdate: response.data?.profile ? true : false,
      },
    });
  } catch (err) {
    dispatch({
      type: USER_DETAIL_FAIL,
    });

    err?.response?.data?.errors.map((message) => toast.error(message));
  }
};
