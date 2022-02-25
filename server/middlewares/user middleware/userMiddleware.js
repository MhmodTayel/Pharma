const jwt = require("jsonwebtoken");
const User = require("../../models/pharmacist");

const userAuth = async (req, res, next) => {

  if ((req.method == "POST"||req.method == "GET") &&(req.url == '/users/user/register'|| req.url == '/users/user/login' ||
   req.url == "/users/contactUs" || req.url == '/users/notification' ||req.url == '/users/notification/all')) {

    next();
    return;
  }
  const { authorization } = req.headers;
  const payload = await jwt.verify(authorization, process.env.SECRET);
  User.findOne({ username: payload.username }).then((user) => {
    req.user = user;
    next();
  });
};

module.exports = userAuth;
