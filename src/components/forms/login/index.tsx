import { type ReactNode } from "react";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { validationSchema } from "./validationSchema";
import { EmailInputField, PasswordInputField } from "@components/input-fields";
import { Button } from "@components/button";
import { routes } from "@shared/constants/routes";
import { ENDPOINTS } from "@shared/constants/endpoints";

import "./styles.scss";

function LoginForm(): ReactNode {
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(true);

          axios
            .post(ENDPOINTS.LOGIN, {
              email: values.email,
              password: values.password,
            })
            .then(() => {
              toast.success("Successfully logged in!");
            })
            .catch((err) => {
              toast.error(err.response.data.detail);
            })
            .finally(() => {
              actions.setSubmitting(false);
            });
        }}
      >
        {({ errors, touched, values, isSubmitting }) => (
          <Form className="login-form">
            <EmailInputField
              name="email"
              placeholder="Work email"
              error={touched.email ? errors.email : ""}
            />
            {values.email && (
              <div className="login-form__password">
                <PasswordInputField
                  name="password"
                  placeholder="Password"
                  error={touched.password ? errors.password : ""}
                />
                <Link
                  to={routes.FORGOT_PASSWORD}
                  className="login-form__password__forgot-password"
                >
                  Forgot your password?
                </Link>
              </div>
            )}
            <Button disabled={isSubmitting} type="submit">
              {isSubmitting ? "Logging in..." : "Log in to Qencode"}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export { LoginForm };
