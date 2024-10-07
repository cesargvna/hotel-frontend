import axios from "axios";
import { getFromLocalStorage } from "../utilities/local-storage-manager";

export const AxiosInterseptor = () => {
  const updateHeaders = (request) => {
    let user = getFromLocalStorage("user");
    const newHeader = {
      Authorization: `Bearer ${user.token}`,
      "Content-Type": "application/json",
    };
    request.headers = newHeader;
    return request;
  };

  axios.interceptors.request.use((request) => {
    return updateHeaders(request);
  });

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      //console.log("error interseptor", error.response.data);
      return Promise.reject(error);
    },
  );
};
