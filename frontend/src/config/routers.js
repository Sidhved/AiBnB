
const { createBrowserRouter } = require("react-router-dom");
const { default: Auth } = require("../pages/Auth");

const router = createBrowserRouter([
  { path: "/", element: <Auth /> },
  {
    path: "/signup",
    element: <Auth />,
  },
]);

export default router
