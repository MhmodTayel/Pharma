import axios from "axios";
const DEV_URL = "http://localhost:3000/users";
const PROD_URL = "";
const TOKEN = localStorage.getItem("token");

export const axiosInstace = axios.create({
  baseURL: DEV_URL,
});

axiosInstace.interceptors.request.use(
  function (config) {
    if (TOKEN) {
      config.headers["Authorization"] = TOKEN;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
