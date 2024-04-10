import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/logo.jpg";
import { baseUrl } from "../../api/baseUrl";
import NavLink from "../Buttons/NavLink";

const NAV_LINKS = [
    {
        id: 1,
        label: "Home",
        linkTo: "/",
    },
    {
        id: 2,
        label: "Service",
        linkTo: "/service",
    },
    {
        id: 3,
        label: "Event",
        linkTo: "/event",
    },
    {
        id: 4,
        label: "Profile",
        linkTo: "/profile",
    },
    {
        id: 5,
        label: "Logout",
    },
];

function Navbar() {
    // declare navigate instance
    const navigate = useNavigate();

    // get auth token from redux
    const { auth_token } = useSelector((state) => state.UserReducer);

    // Handle event when user presses any nav link
    const handleNavClick = async (navLabel) => {
        // if user clicked on nav label is logout
        if (navLabel === "Logout") {
            try {
                // logout user with token
                await axios.post(`${baseUrl}/auth/logout/`, {
                    token: auth_token,
                });

                // After succesful logout, navigate them to login page
                navigate("/signup");
            } catch (error) {
                console.log("error", error);
            }
        }
    };

    return (
        <div className="h-[100px] w-[100vw] flex flex-ro w items-center justify-center">
            <div className="flex-[0.7] flex flex-row items-center justify-between">
                {/* Nav brand */}
                <div className="flex flex-row items-center space-x-3">
                    <div className="bg-white rounded-full">
                        <img src={Logo} className="h-[40px] w-[40px]" />
                    </div>
                    <h1 className="text-3xl text-white font-bold font-[arizonia]">
                        AiBnB
                    </h1>
                </div>

                <div className="flex flex-row space-x-10">
                    {/* Nav items */}
                    {NAV_LINKS.map((link) => (
                        <NavLink navLabel={link.label} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
