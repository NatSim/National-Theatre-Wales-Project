const Joi = require("joi");

const authJoiSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(5).max(10).required(),
  repeat_password: Joi.ref("password"),
});

module.export = { authJoiSchema };
