const joi = require("joi");

const validateSignUp = (req, res, next) => {
  const schema = joi.object({
    name: joi.string().trim().min(2).required().max(20).messages({
      "string.min": "This name is too short",
      "string.max": "This name is too long",
      "string.empty": "This field must be completed",
    }),
    lastname: joi.string().trim().min(2).required().max(20).messages({
      "string.min": "This lastname is too short",
      "string.max": "This lastname is too long",
      "string.empty": "This field must be completed",
    }),
    mail: joi.string().trim().email().required().messages({
      "string.email": "This field must be an email",
      "string.empty": "This field must be completed",
    }),
    password: joi
      .string()
      .trim()
      .min(7)
      .max(16)
      .regex(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
      .required()
      .messages({
        "string.min": "This password is too short",
        "string.max": "This password is too long",
        "string.empty": "This field must be completed",
        "string.pattern.base":
          "Between 8 and 16 characters (Uppercase, Lowercase, Numbers)",
      }),
    location: joi.string().trim().min(2).required().messages({
      "string.min": "This location is too short",
      "string.empty": "This field must be completed",
    }),
  });
  const validation = schema.validate(req.body, {
    abortEarly: false,
    allowUnknown: true,
  });

  if (validation.error) {
    let error = {};
    validation.error.details.forEach(
      (errorObj) => (error[errorObj.path[0]] = errorObj.message)
    );
    return res.json({ success: false, error });
  }

  next();
};

module.exports = validateSignUp;
