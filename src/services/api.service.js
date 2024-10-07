import axios from "axios";
import FormData from "form-data";
import { getFromLocalStorage } from "../utilities/local-storage-manager";

const API_URL = "http://localhost:3000/api";

const login = async (email, password) => {
  return await axios.post(`${API_URL}/login`, { email, password });
};
const register = async (email, password) => {
  return await axios.post(`${API_URL}/register`, { email, password });
};

const API_SERVICE = {
  get: async (url) => {
    return await axios.get(`${API_URL + url}`);
  },
  post: async (url, data) => {
    return await axios.post(`${API_URL + url}`, data);
  },
  put: async (url, data) => {
    return await axios.put(`${API_URL + url}`, data);
  },
  delete: async (url) => {
    return await axios.delete(`${API_URL + url}`);
  },
};
const POST_IMAGE = async (url, data) => {
  const token = getFromLocalStorage("user").token;
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("address", data.address);
  formData.append("clasification", data.clasification);
  formData.append("price", data.price);
  formData.append("description", data.description);
  formData.append("image", data.file); // Agrega la imagen al FormData

  console.log([...formData]); // Muestra el contenido de formData
  const response = await fetch(`${API_URL + url}`, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();
  return result;
};

export { login, register, API_SERVICE, POST_IMAGE };
