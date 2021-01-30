export const API_URL = "http://localhost:5000";

export const getConfig = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
  } else {
    return {
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
};
