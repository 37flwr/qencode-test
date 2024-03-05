import { Form, Formik } from "formik";
import { type ReactNode } from "react";
import { EmailInputField } from "../../input-fields";
import { Button } from "../../button";

import "./styles.scss";

function LoginForm(): ReactNode {
  const handleClick = () => {};
  return (
    <Formik
      initialValues={{ name: "jared" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      <Form className="email-form">
        <EmailInputField name="email" placeholder="Work email" />
        <Button onClick={handleClick} type="submit">
          Log in to Qencode
        </Button>
      </Form>
    </Formik>
  );
}

export { LoginForm };
