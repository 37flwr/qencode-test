import { type ReactNode } from "react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";
import { validationSchema } from "./validationSchema";
import { PasswordInputField } from "@components/input-fields";
import { Button } from "@components/button";
import { ENDPOINTS } from "@shared/constants/endpoints";
import { routes } from "@shared/constants/routes";

import "./styles.scss";

function SetNewPassword(): ReactNode {
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(true);

          axios
            .post(ENDPOINTS.SET_NEW_PASSWORD, {
              password: values.password,
              password_confirm: values.confirmPassword,
            })
            .then(() => {
              toast.success("Successfully set new password!");
              navigate(routes.LOGIN);
            })
            .catch((err) => {
              toast.error(
                err.response.data.detail[0].error ||
                  err.response.data.detail ||
                  "Something went wrong"
              );
            })
            .finally(() => {
              actions.setSubmitting(false);
            });
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="reset-password-form">
            <PasswordInputField
              name="password"
              label="Password"
              placeholder="Password"
              error={touched.password ? errors.password : ""}
            />
            <PasswordInputField
              name="confirmPassword"
              label="Confirm password"
              placeholder="Password"
              error={touched.confirmPassword ? errors.confirmPassword : ""}
            />
            <Button
              disabled={isSubmitting}
              type="submit"
              className="reset-password-form__button"
            >
              {isSubmitting ? "Resetting password..." : "Reset Password"}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export { SetNewPassword };
