const adminMW = require("./store middleware/adminMiddleware");
const userMW = require("./user middleware/userMiddleware");

const routerAuth = (req, res, next) => {

  const route = req.url.split("/")[1];

  if (route == "store") {
    adminMW(req, res, next);
  } else if (route == "users") {
    userMW(req, res, next);
  } else {
    next("unknown error");
  }
};

module.exports = routerAuth;
