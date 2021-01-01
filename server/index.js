const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// IMPORT YOUR MODELS
require("./models/Users");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  // Connecting to Repo DB
  process.env.MONGODB_URI ||
    `mongodb://localhost:27017/black-codher-personal-project`,
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

//Post request register
app.post("/register", (req, res) => {
  res.send("Post successful");
});

//Post request login
app.post("/login", async (req, res) => {
  res.send("Post successful!!");
});

// IMPORT YOUR ROUTES
require("./routes/usersRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
