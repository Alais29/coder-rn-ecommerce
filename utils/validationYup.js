import * as yup from "yup";

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email.")
    .required("Required field"),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must have at least ${min} characters`)
    .required("Required field"),
});

export default loginValidationSchema;
