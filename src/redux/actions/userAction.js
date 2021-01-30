import axios from "axios";
import { API_URL } from "@config/index.js";
import { toast } from "react-toastify";

//types imports
import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOAD_SUCCESS,
} from "@redux/types";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const loginUser = (formData) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });

  const body = JSON.stringify(formData);

  try {
    const response = await axios.post(`${API_URL}/users/login`, body, config);

    dispatch({
      type: USER_LOGIN_SUCCESS,
    });

    dispatch({ type: USER_LOAD_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({
      type: USER_LOGIN_FAIL,
    });

    err?.response?.data?.errors.map((err) => toast.error(err.message));
  }
};
