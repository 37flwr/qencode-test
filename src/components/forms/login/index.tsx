import { type ReactNode } from "react";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { EmailInputField, PasswordInputField } from "../../input-fields";
import { Button } from "../../button";
import { validationSchema } from "./validationSchema";
import { routes } from "@shared/constants/routes";

import "./styles.scss";

function LoginForm(): ReactNode {
  const handleClick = () => {};

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {({ errors, touched }) => (
        <Form className="email-form">
          <EmailInputField
            name="email"
            placeholder="Work email"
            error={touched.email ? errors.email : ""}
          />
          {touched.email && (
            <div className="email-form__password">
              <PasswordInputField
                name="password"
                placeholder="Password"
                error={touched.password ? errors.password : ""}
              />
              <Link
                to={routes.FORGOT_PASSWORD}
                className="email-form__password__forgot-password"
              >
                Forgot your password?
              </Link>
            </div>
          )}
          <Button onClick={handleClick} type="submit">
            Log in to Qencode
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export { LoginForm };
