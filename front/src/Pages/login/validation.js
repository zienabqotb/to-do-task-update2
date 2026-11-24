import * as Yup from "yup";

export const loginValidation = Yup.object({
  identifier: Yup.string().trim().required("Required"),
  password: Yup
    .string()
    .trim()
    .required()
});