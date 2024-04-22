import CreateItinerary from "../pages/CreateItinerary";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import PrivateLayout from "./PrivateLayout";

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
        element: <PrivateLayout />,
        children: [{ path: "/dashboard", element: <Dashboard /> }],
    },
    {
        path: "/profile",
        element: <Profile />                
    },
    {
        path: "/createItinerary",
        element: <CreateItinerary />
    }
]);

export default router;
