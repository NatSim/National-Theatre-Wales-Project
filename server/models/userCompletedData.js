const mongoose = require("mongoose");
const { Schema } = mongoose;

const challengesSchema = new Schema({
  id: Number,
  direction: String,
  image: String,
  text: String,
});

mongoose.model("challenges", challengesSchema);
