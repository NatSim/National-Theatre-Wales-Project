const mysql = require("mysql");
const db = require("../index");

module.exports = (app) => {
  //SEND USER DETAILS TO DATABASE
  app.post(`/register`, (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    db.query(
      "INSERT INTO users (username, email, password) VALUES (?,?,?)",
      [username, email, password],
      (err, result) => {
        console.log(err);
      }
    );
  });
};

// app.get(`/api/user`, async (req, res) => {
//   const persons = await User.find();
//   return res.status(200).send(persons);
// });
//   //Function called everytime register button hit
//   app.post(`/register`, async (req, res) => {
//     const user = await User.create(req.body);
//     console.log("data is valid");
//     return (
//       console.log("data is valid"),
//       res.status(201).send({
//         error: false,
//         user,
//       })
//     );
//   });
//   //Function called everytime login button hit
//   app.post(`/login`, async (req, res) => {
//     // console.log(req);
//     const user = await User.findOne({ email: req.body.email }); //(create a record from the json:object)
//     if (user === null) {
//       return res.status(401).send({
//         error: true,
//       });
//     } else {
//       return res.status(200).send({
//         error: false,
//         user,
//       });
//     }
//   });

//Contact Form function called everytime button hit
//line 37 receives info ()
// app.post(`/contact`, async (req, res) => {
//   console.log(req.body);
//   const contact = await Contact.create(req.body); //(create a record from the json:object)
//   return res.status(201).send({
//     error: false,
//     contact,
//     success: "Success Message",
//   });
// });

//   //incoming route(house for people to attend)
//   app.patch(`/api/users/challenge/`, async (req, res) => {
//     const { id } = req.params;
//     //when id recieved=findByEmail, (email) used to find user and then update that user's challenge array
//     //challenge array true/false     Model.findByIdAndUpdate(id, updateObj, {new: true}, function(err, model) {...
//     const user = await User.findByIdAndUpdate(id, req.body, { new: true });
//     console.log("id received");
//     try {
//       res.status(202).send({
//         user,
//       });
//     } catch (error) {
//       res.status(400).send({
//         status: false,
//         error,
//       });
//     }
//   });
//   //User delete account
//   app.delete(`/api/user/:id`, async (req, res) => {
//     const { id } = req.params;
//     const user = await User.findByIdAndDelete(id);
//     return res.status(202).send({
//       error: false,
//       user,
//     });
//   });
