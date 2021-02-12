const mongoose = require("mongoose");
const { Schema } = mongoose;

const challengesSchema = new Schema({
  id: Number,
  email: String,
});

mongoose.model("challenges", challengesSchema);
