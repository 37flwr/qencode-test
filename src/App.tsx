import { type ReactNode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import "./styles/index.scss";

function App(): ReactNode {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
