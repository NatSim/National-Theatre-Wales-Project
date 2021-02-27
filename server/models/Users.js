const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
  id: Number,
  username: { type: String, required: true, index: { unique: true } },
  email: { type: String, required: true },
  password: { type: String, required: true },
  challenges: Array,
});

module.exports = mongoose.model("users", userSchema);
