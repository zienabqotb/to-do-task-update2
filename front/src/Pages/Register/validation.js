import * as yup from "yup";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const registerValidation = yup.object({
  username: yup.string().trim().required(),
  email: yup.string().email("Enter a valid email").trim().required("Required"),
  password: yup
    .string()
    .trim()
    .required()
    .matches(
      passwordRegex,
      "Use 8+ characters with a mix of uppercase, lowercase, numbers, and symbols",
    ),
});