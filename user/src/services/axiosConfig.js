import axios from "axios";
const DEV_URL = "http://localhost:5000/users";
const PROD_URL = "/users";
const TOKEN = localStorage.getItem("token");

export const axiosInstace = axios.create({
  baseURL: PROD_URL,
  headers: { authorization: TOKEN },
});

// axiosInstace.interceptors.request.use(
//   function (config) {
//     if (TOKEN) {
//       config.headers["authorization"] = TOKEN;
//     }
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );
