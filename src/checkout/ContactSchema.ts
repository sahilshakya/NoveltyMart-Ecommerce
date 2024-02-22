import * as yup from "yup";
export const ContactSchema = yup
  .object({
    firstName: yup.string().required("Missing First Name"),
    lastName: yup.string().required("Missing Last Name"),
    phone: yup.string().min(10).max(14).required("Missing phone"),
    address1: yup.string().required("Missing address 1"),
    address2: yup.string().required("Missing address 2"),
    city: yup.string().required("Missing city"),
    state: yup.string().required("Missing state"),
    zip: yup.string().min(1).max(5).required("Missing zip"),
  })
  .required();
