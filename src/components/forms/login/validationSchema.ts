import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password should be at least 8 characters")
    .max(50, "Password should be shorter than 50 characters")
    .required("Password is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});
