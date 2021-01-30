import axios from "axios";
import { API_URL, getConfig } from "@config/index.js";
import { toast } from "react-toastify";

//types imports
import {
  ADD_DOCTOR_SUCCESS,
  ADD_DOCTOR_REQUEST,
  ADD_DOCTOR_FAIL,
} from "@redux/types";

export const addDoctor = (formData) => async (dispatch) => {
  dispatch({ type: ADD_DOCTOR_REQUEST });

  try {
    const response = await axios.post(
      `${API_URL}/users/register`,
      JSON.stringify(formData),
      getConfig()
    );

    dispatch({
      type: ADD_DOCTOR_SUCCESS,
    });

    toast.success(
      <>
        <h3>Register Success</h3>
        <p>
          We’ve just dropped an email to you. Click on the link to complete your
          account setup
        </p>
      </>
    );
  } catch (err) {
    dispatch({
      type: ADD_DOCTOR_FAIL,
    });

    err?.response?.data?.errors.map((message) => toast.error(message));
  }
};
