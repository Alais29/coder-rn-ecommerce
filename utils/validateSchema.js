import Joi from "joi";

export const schemaEmail = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .empty()
    .messages({
      "string.email": "Invalid email format",
      "string.empty": "Required field",
    }),
});

export const schemaPassword = Joi.object({
  password: Joi.string().empty().min(6).max(100).alphanum().messages({
    "string.empty": "Required field",
    "string.min": "The password must have at least 6 characters",
    "string.alphanum": "Only alphanumeric characters allowed",
  }),
});
