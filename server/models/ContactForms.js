const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactSchema = new Schema({
  username: String,
  email: String,
  message: String,
  subject: String,
});

mongoose.model("contactforms", contactSchema);
