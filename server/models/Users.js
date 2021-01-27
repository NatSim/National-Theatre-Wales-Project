const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  id: Number,
  username: String,
  email: String,
  password: String,
  challenges: Array,
});

mongoose.model("users", userSchema);
