const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// IMPORT YOUR MODELS
require("./models/Users");
require("./models/ContactForms");
//MongoDB hosted in cloud
require("dotenv").config({ path: ".env" });

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  // Connecting to MONGO DATABASE
  process.env.MONGODB_URI || `mongodb://localhost:27017/go-tell-the-bees-app`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', 8080);

  // Pass to next layer of middleware
  next();
});

app.use(bodyParser.json());

// IMPORT YOUR ROUTES
require("./routes/usersRoutes")(app);

//LISTENS FOR PORT CONNECTIONS
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
