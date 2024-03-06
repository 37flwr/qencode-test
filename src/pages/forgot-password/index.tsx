import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { PageWrapper } from "@pages/PageWrapper";
import { ForgotPasswordForm } from "@components/forms";
import { Button } from "@components/button";
import { routes } from "@shared/constants/routes";
import qencodeLogo from "@shared/icons/QencodeLogo.svg";

import "./styles.scss";

function ForgotPassword(): ReactNode {
  return (
    <PageWrapper>
      <div className="forgot-password-page">
        <img
          src={qencodeLogo}
          className="forgot-password__logo"
          alt="Qencode"
        />
        <h1 className="forgot-password-page__title">Forgot Password?</h1>
        <div className="forgot-password-page__form">
          <ForgotPasswordForm />
        </div>
        <Link
          to={routes.LOGIN}
          style={{ width: "100%", textDecoration: "none" }}
        >
          <Button variant="bordered">Cancel</Button>
        </Link>
      </div>
    </PageWrapper>
  );
}

export { ForgotPassword };
