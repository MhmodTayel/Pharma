import { axiosInstace } from "./axiosConfig";

function login(body) {
  return axiosInstace.post("/user/login", body);
}

function register(body) {
  return axiosInstace.post("/user/register", body);
}

function createMessage(body) {
  return axiosInstace.post("/contactUs", body);
}

function fullTextSearch(query) {
  return axiosInstace.get("/medicine/search", { params: { query } });
}

function getMedById(id) {
  return axiosInstace.get(`/medicine/${id}`);
}

  function getAllMed() {
  return axiosInstace.get(`/medicine/all`);
}
function getIncomingMed(body) {
  return axiosInstace.post(`/medicine/incoming`,body);
}
function checkout(body){
  return axiosInstace.post(`/checkouts`,body)
}
export { login, register, fullTextSearch, getMedById, checkout,getAllMed ,createMessage,getIncomingMed };

