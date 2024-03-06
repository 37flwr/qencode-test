import { useState, type ReactNode } from "react";
import { Field } from "formik";
import togglePasswordVisibility from "@shared/icons/ShowPassword.svg";

import "../styles.scss";

type Props = {
  name: string;
  label?: string;
  placeholder?: string;
  error?: string;
};

function PasswordInputField(props: Props): ReactNode {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const toggleVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="input">
      {props.label && (
        <label className="input__label" htmlFor={props.name}>
          {props.label}
        </label>
      )}
      <div className="input__field_wrapper">
        <Field
          className="input__field"
          name={props.name}
          placeholder={props.placeholder || "Enter..."}
          type={passwordVisible ? "text" : "password"}
        />
        <button
          onClick={toggleVisibility}
          type="button"
          className="input__field__toggle-visibility"
        >
          <img src={togglePasswordVisibility} alt="" />
        </button>
      </div>
      {props.error && <span className="input__error">{props.error}</span>}
    </div>
  );
}

export { PasswordInputField };
