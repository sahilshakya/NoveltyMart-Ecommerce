import * as yup from "yup";
export const LoginSchema = yup
  .object({
    email: yup.string().required("Missing Email").email("Invalid email format"),
    password: yup.string().required("Missing Password"),
  })
  .required();
