import { type ReactNode } from "react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";
import { validationSchema } from "./validationSchema";
import { EmailInputField } from "@components/input-fields";
import { Button } from "@components/button";
import { ENDPOINTS } from "@shared/constants/endpoints";

import "./styles.scss";
import { routes } from "@shared/constants/routes";

function ForgotPasswordForm(): ReactNode {
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(true);

          axios
            .post(ENDPOINTS.RESET_PASSWORD, {
              email: values.email,
            })
            .then(() => {
              navigate(routes.CREATE_NEW_PASSWORD);
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
          <Form className="email-form">
            <EmailInputField
              name="email"
              placeholder="Work email"
              error={touched.email ? errors.email : ""}
            />
            <Button disabled={isSubmitting} type="submit">
              {isSubmitting ? "Resetting password..." : "Send"}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export { ForgotPasswordForm };
