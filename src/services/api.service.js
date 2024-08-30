import axios from "axios";

const API_URL = "http://localhost:3000/api";

const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, {
    username,
    password,
  });
  if (response) {
    console.log("response", response.data);
  } else {
    console.log("error", response.data);
  }
  return response.data;
};

export { login };
