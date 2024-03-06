import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password should be at least 8 characters")
    .max(50, "Password should be shorter than 50 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .required("Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
