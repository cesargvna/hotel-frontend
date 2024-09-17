import axios from "axios";

const API_URL = "http://localhost:3000/api";

const login = async (email, password) => {
  return await axios.post(`${API_URL}/login`, { email, password });
};

export { login };
