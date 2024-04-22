import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateLayout = () => {
    const { auth_token } = useSelector((state) => state.UserReducer);

    console.log("auth token", auth_token);

    // if (auth_token === "") {
    //     return <Navigate to="/" replace />;
    // }

    return <Outlet />;
};

export default PrivateLayout;
