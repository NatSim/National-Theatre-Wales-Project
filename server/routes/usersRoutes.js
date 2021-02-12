const mongoose = require("mongoose");
const User = mongoose.model("users");
const Contact = mongoose.model("contactforms");

module.exports = (app) => {
  app.get(`/api/user`, async (req, res) => {
    const persons = await User.find();
    return res.status(200).send(persons);
  });

  //Function called everytime register button hit
  app.post(`/register`, async (req, res) => {
    console.log(req);
    const user = await User.create(req.body); //(create a record from the json:object)
    return res.status(201).send({
      error: false,
      user,
    });
  });
  //Function called everytime login button hit
  app.post(`/login`, async (req, res) => {
    console.log(req);
    const user = await User.findOne({ email: req.body.email }); //(create a record from the json:object)
    if (user === null) {
      return res.status(401).send({
        error: true,
      });
    } else {
      return res.status(200).send({
        error: false,
        user,
      });
    }
  });

  //Contact Form function called everytime button hit
  //line 37 receives info ()
  app.post(`/contact`, async (req, res) => {
    console.log(req.body);
    const contact = await Contact.create(req.body); //(create a record from the json:object)
    return res.status(201).send({
      error: false,
      contact,
      success: "Success Message",
    });
  });

  app.put(`/api/users/:id/challenges/:challengeId`, async (req, res) => {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      user,
    });
  });

  //User delete account
  app.delete(`/api/user/:id`, async (req, res) => {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      user,
    });
  });
};
