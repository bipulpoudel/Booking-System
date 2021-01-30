import axios from "axios";
import { API_URL, getConfig } from "@config/index.js";
import { toast } from "react-toastify";

//types imports
import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOAD_SUCCESS,
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
