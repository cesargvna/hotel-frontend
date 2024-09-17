import axios from "axios";

export const AxiosInterseptor = () => {
  const updateHeaders = (request) => {
    let token = localStorage.getItem("token");
    const newHeader = {
      Authorization: `Bearer ${token}`,
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
