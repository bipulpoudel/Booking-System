import { API_URL, getConfig } from "@config/index";
import axios from "axios";

export const bookEvent = async (formData) => {
  try {
    const response = await axios.post(
      `${API_URL}/booking/book`,
      JSON.stringify(formData),
      getConfig()
    );

    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

export const getEvents = async () => {
  try {
    const response = await axios.get(`${API_URL}/booking/list`, getConfig());

    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};
