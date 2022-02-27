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

function getMedByCat(cat) {
  return axiosInstace.get(`/medicine/category/${cat}`);
}

function getOrders(sessionId) {
  return axiosInstace.get(`/payment/${sessionId}`);
}

function getAllMed() {
  return axiosInstace.get(`/medicine/all`);
}

function checkout(body) {
  return axiosInstace.post(`/checkouts`, body);

}
function createOrder(order) {
  return axiosInstace.post(`/orders/newOrder`, order);
}

function reduceMedQuantity(med) {
  return axiosInstace.patch(`/medicine/quantity`, med);
}

function getOrdersByUserId(id) {
  return axiosInstace.get(`/orders/${id}`);

}

function saveOrder(order) {
  return axiosInstace.post(`/orders/saveOrder`, order);
}
function getSavedOrders() {
  return axiosInstace.get(`/orders/savedOrders`);
}

function deleteSavedOrder(id) {
  return axiosInstace.post(`/orders/savedOrder/${id}`);
}
export {
  login,
  register,
  fullTextSearch,
  getMedById,
  checkout,
  getAllMed,
  createMessage,
  getOrders,
  createOrder,
  reduceMedQuantity,
  getOrdersByUserId,
  getMedByCat,
  saveOrder,
  deleteSavedOrder,
  getSavedOrders
};
