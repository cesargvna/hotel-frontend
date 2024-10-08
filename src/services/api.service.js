import axios from "axios";
import FormData from "form-data";
import { getFromLocalStorage } from "../utilities/local-storage-manager";

// const baseUrl = "http://localhost:3000/api";
const baseUrl = "/api";

const login = async (email, password) => {
  return await axios.post(`${baseUrl}/login`, { email, password });
};
const register = async (email, password) => {
  return await axios.post(`${baseUrl}/register`, { email, password });
};

const API_SERVICE = {
  get: async (url) => {
    return await axios.get(`${baseUrl + url}`);
  },
  post: async (url, data) => {
    return await axios.post(`${baseUrl + url}`, data);
  },
  put: async (url, data) => {
    return await axios.put(`${baseUrl + url}`, data);
  },
  delete: async (url) => {
    return await axios.delete(`${baseUrl + url}`);
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
  const response = await fetch(`${baseUrl + url}`, {
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
