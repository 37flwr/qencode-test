import { type ReactNode } from "react";
import { PageWrapper } from "@pages/PageWrapper";
import { SetNewPasswordForm } from "@components/forms";
import qencodeLogo from "@shared/icons/QencodeLogo.svg";

import "./styles.scss";

function SetNewPassword(): ReactNode {
  return (
    <PageWrapper>
      <div className="reset-password-page">
        <img src={qencodeLogo} className="reset-password__logo" alt="Qencode" />
        <h1 className="reset-password-page__title">Create new Password?</h1>
        <div className="reset-password-page__form">
          <SetNewPasswordForm />
        </div>
      </div>
    </PageWrapper>
  );
}

export { SetNewPassword };
