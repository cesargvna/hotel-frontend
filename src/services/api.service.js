import axios from "axios";

const API_URL = "http://localhost:3000/api";

const login = async (email, password) => {
  return await axios.post(`${API_URL}/login`, { email, password });
};

const API_SERVICE = {
  get: async (url) => {
    return await axios.get(`${API_URL + url}`);
  },
  post: async (url, data) => {
    console.log(data);
    return await axios.post(`${API_URL + url}`, data);
  },
  delete: async (url) => {
    return await axios.delete(`${API_URL + url}`);
  }

}

export { login, API_SERVICE };
