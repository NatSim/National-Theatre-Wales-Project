const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(express.json());

app.use(cors());

// app.use("^/$", (req, res, next) => {});

//IMPORT Public Directory
// const publicDirectory = path.join(__dirname, "public", "index.html");
// app.use(express.static(publicDirectory));

// CREATE NEW DB TEST

// Create CONNECTION  SQL DATABASE
//process.env.DB_PASS,
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: "",
  database: process.env.DB_NAME,
});
// console.log(process.env);

// CONNECT
db.connect((err) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log("Successfully connected to MySQL database");
});

// IMPORT YOUR ROUTES
// require("./routes/usersRoutes")(app);

//SEND USER DETAILS TO DATABASE
app.post("/register", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO users (username, email, password) VALUES (?,?,?)",
    [username, email, password],
    (err, result) => {
      if (err !== null) {
        console.log(err);
      } else {
        console.log("Data successfully stored in table!");
      }
    }
  );
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE nodemysql";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("database created");
  });
});
//Create test table
app.get("/createpoststable", (req, res) => {
  let sql =
    "CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Post table created");
  });
});
//Insert post 1
app.get("/addpost1", (req, res) => {
  let post = { title: "Post One", body: "This is post number one" };
  let sql = "INSERT INTO posts SET ?";
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Post one added");
  });
});

// //LISTENS FOR PORT CONNECTIONS| Run Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
