import { createBrowserRouter } from "react-router-dom";
import DashLayout from "./layout/dashLayout";
import Dashboard from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    Component: DashLayout,
    children: [{ index: true, Component: Dashboard }],
  },
]);

export default router;
