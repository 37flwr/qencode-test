import { type ReactNode } from "react";
import { LoginForm } from "@components/forms";
import { Button } from "@components/button";
import googleLogo from "@shared/icons/GoogleLogo.svg";
import githubLogo from "@shared/icons/GithubLogo.svg";
import qencodeLogo from "@shared/icons/QencodeLogo.svg";

import "./styles.scss";
import { PageWrapper } from "@pages/PageWrapper";

const socialButtons = [
  {
    icon: googleLogo,
    text: "Google",
  },
  {
    icon: githubLogo,
    text: "Github",
  },
];

function Login(): ReactNode {
  return (
    <PageWrapper>
      <div className="login-page">
        <img src={qencodeLogo} className="login-page__logo" alt="Qencode" />
        <h1 className="login-page__title">Log in to your account</h1>
        <div className="login-page__socials">
          {socialButtons.map((buttonContent) => (
            <Button variant="bordered" size="small" key={buttonContent.text}>
              <div className="login-page__socials__button-content">
                <img
                  src={buttonContent.icon}
                  className="login-page__socials__button-content__icon"
                />
                <span className="login-page__socials__button-content__text">
                  {buttonContent.text}
                </span>
              </div>
            </Button>
          ))}
        </div>
        <div className="login-page__separator">
          <div className="login-page__separator__line" />
          <span className="login-page__separator__text">OR</span>
          <div className="login-page__separator__line" />
        </div>
        <div className="login-page__form">
          <LoginForm />
          <span className="login-page__form__footer">
            Is your company new to Qencode?{" "}
            <span className="login-page__form__footer__link">Sign up</span>
          </span>
        </div>
      </div>
    </PageWrapper>
  );
}

export { Login };
