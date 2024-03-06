import { useRoutes } from "react-router";
import { LoginPage } from "./pages";
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
];

const AppRoutes = (): JSX.Element | null => {
  return useRoutes(publicRoutes);
};

export default AppRoutes;
