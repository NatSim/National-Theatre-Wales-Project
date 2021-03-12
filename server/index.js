const express = require("express");
const mysql = require("mysql");
require("dotenv").config();

// console.log(process.env);
// // IMPORT YOUR MODELS

// Create CONNECTION  SQL DATABASE
// const db = require("db");
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// CONNECT
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Successfully connected to MySQL database");
});

const app = express();

// // IMPORT YOUR ROUTES
// require("./routes/usersRoutes")(app);

// //LISTENS FOR PORT CONNECTIONS
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});

//RUN SERVER ON PORT 3000
// app.listen("3000", () => {
//   console.log("Server running on port 3000");
// });
