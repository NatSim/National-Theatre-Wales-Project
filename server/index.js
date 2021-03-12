const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

// CREATE NEW DB TEST

// Create CONNECTION  SQL DATABASE

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});
// console.log(process.env);

// CONNECT
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Successfully connected to MySQL database");
});

// IMPORT YOUR ROUTES
require("./routes/usersRoutes")(app);

// //LISTENS FOR PORT CONNECTIONS| Run Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
