import { type ReactNode } from "react";
import { Field } from "formik";

import "./styles.scss";

type Props = {
  name: string;
  label?: string;
  placeholder?: string;
};

function EmailInputField({ name, label, placeholder }: Props): ReactNode {
  return (
    <div className="input">
      {label && (
        <label className="input__label" htmlFor={name}>
          {label}
        </label>
      )}
      <Field
        className="input__field"
        name={name}
        placeholder={placeholder || "Enter..."}
        type="email"
      />
    </div>
  );
}

export { EmailInputField };
