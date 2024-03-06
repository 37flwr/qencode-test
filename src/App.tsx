import { type ReactNode } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes";
import "./styles/index.scss";
import { routes } from "@shared/constants/routes";
import { Button } from "@components/button";

const buttons = [
  {
    link: routes.LOGIN,
    text: "Login page",
  },
  {
    link: routes.FORGOT_PASSWORD,
    text: "Forgot password page",
  },
  {
    link: routes.SET_NEW_PASSWORD,
    text: "Create new password page",
  },
];

function App(): ReactNode {
  return (
    <Router>
      <AppRoutes />
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          display: "flex",
          gap: "10px",
        }}
      >
        {buttons.map(({ link, text }) => (
          <Link to={link} style={{ textDecoration: "none" }} key={text}>
            <Button variant="bordered">{text}</Button>
          </Link>
        ))}
      </div>
      <Toaster />
    </Router>
  );
}

export default App;
