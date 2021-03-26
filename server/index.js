const express = require("express");
const mysql = require("mysql");

const cors = require("cors");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(express.json());

app.use(cors({ credentials: true, origin: "*" }));

// app.use("^/$", (req, res, next) => {});

//ACCESS HEADERS
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

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
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

//IMPORT Public Directory

/** CREATE CONNECTION SQL DATABASE **/

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: "",
  database: process.env.DB_NAME,
});
// console.log(process.env);

/** CONNECT TO DATABASE **/

db.connect((err) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log("Successfully connected to MySQL database");
});

app.get("/", (req, res) => {
  res.render("index");
});

// //LISTENS FOR PORT CONNECTIONS| Run Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
