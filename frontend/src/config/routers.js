const { createBrowserRouter } = require("react-router-dom");
const { default: Signup } = require("../pages/Signup");

const router = createBrowserRouter([
  { path: "/", element: <Signup /> },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router
