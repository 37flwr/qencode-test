import { type ReactNode } from "react";
import { Field } from "formik";

import "../styles.scss";

type Props = {
  name: string;
  label?: string;
  placeholder?: string;
  error?: string;
};

function EmailInputField(props: Props): ReactNode {
  return (
    <div className="input">
      {props.label && (
        <label className="input__label" htmlFor={props.name}>
          {props.label}
        </label>
      )}
      <Field
        className="input__field"
        name={props.name}
        placeholder={props.placeholder || "Enter..."}
        type="email"
      />
      {props.error && <span className="input__error">{props.error}</span>}
    </div>
  );
}

export { EmailInputField };
