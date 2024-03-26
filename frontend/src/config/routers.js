import Dashboard from "../pages/Dashboard";

const { createBrowserRouter } = require("react-router-dom");
const { default: Auth } = require("../pages/Auth");

const router = createBrowserRouter([
  { path: "/", element: <Auth /> },
  {
    path: "/signup",
    element: <Auth />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
]);

export default router
