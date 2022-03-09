const jwt = require("jsonwebtoken");
const Admin = require("../../models/admin");

const adminAuth = async (req, res, next) => {
  if (
    req.method == "POST" &&
    (req.url == "/store/admin/login" || req.url == "/store/admin/register" ||
    req.url == "/store/medicine/add" || req.url==`/store/medicine/${id}`)
  ) {
    next();
    return;
  }
  const { authorization } = req.headers;
  const payload = await jwt.verify(authorization, process.env.SECRET);
  Admin.findOne({ username: payload.username }).then((admin) => {
    req.admin = admin;
    next();
  });
};

module.exports = adminAuth;
