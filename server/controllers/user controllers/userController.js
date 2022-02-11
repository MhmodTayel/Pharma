require("dotenv").config();
const User = require("../../models/pharmacist");
const jwt = require("jsonwebtoken");

const create = (user) => User.create(user);
const login = async ({ username, password }, next) => {
  const user = await User.findOne({ username });
  if (!user) {
    next(`wrong username`);
    return;
  }
  const isValid = await user.comparePassword(password);
  if (!isValid) {
    next(`wrong password`);
    return;
  }

  return jwt.sign(
    {
      username,
      _id: user._id,
      maxAge: "2d",
    },
    process.env.SECRET
  );
};



module.exports = { create, login };
