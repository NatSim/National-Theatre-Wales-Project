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

/**IMPORT YOUR ROUTES**/
// require("./routes/usersRoutes")(app);
//Contact Form function called everytime button hit
//receives info ()

// app.post(`/contact`, async (req, res) => {
//   console.log(req.body);
//   const contact = await Contact.create(req.body); //(create a record from the json:object)
//   return res.status(201).send({
//     error: false,
//     contact,
//     success: "Success Message",
//   });
// });

/** SEND USER DETAILS TO DATABASE user table works fine **/
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

//INSERT DATA INTO CONTACT FORM TABLE
app.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  db.query(
    "INSERT INTO contact_forms(name, email, subject, message) VALUES (?,?,?,?)",
    [name, email, subject, message],
    (err, result) => {
      if (err !== null) {
        console.log(err);
      } else {
        res.send("Contact form data submitted");
        console.log("succesfully sent data");
      }
    }
  );
});

app.get("/contactupdate", (req, res) => {
  let sql = "ALTER TABLE contact_forms MODIFY message VARCHAR(1000)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Contact form table updated");
  });
});

// Create test table
// app.get("/createcontact", (req, res) => {
//   let sql =
//     "CREATE TABLE contact_forms(id int AUTO_INCREMENT, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, subject VARCHAR(255) NOT NULL ,message VARCHAR(1000) NOT NULL, primary key (id))";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Contact form table created");
//   });
// });

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
