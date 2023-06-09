const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // name: {
  //   type: String,
  //   required: true,
  // },
  // email: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  // password: {
  //   type: String,
  //   required: true,
  // },
  // date: {
  //   type: Date,
  //   default: Date.now,
  // },
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
