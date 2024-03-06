import { useRoutes } from "react-router";
import { ForgotPasswordPage, LoginPage, SetNewPasswordPage } from "./pages";
import { routes } from "@shared/constants/routes";

const publicRoutes = [
  {
    path: routes.BASE,
    element: <LoginPage />,
  },
  {
    path: routes.LOGIN,
    element: <LoginPage />,
  },
  {
    path: routes.FORGOT_PASSWORD,
    element: <ForgotPasswordPage />,
  },
  {
    path: routes.SET_NEW_PASSWORD,
    element: <SetNewPasswordPage />,
  },
];

const AppRoutes = (): JSX.Element | null => {
  return useRoutes(publicRoutes);
};

export default AppRoutes;
