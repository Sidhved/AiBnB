import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/aibnb-logo-final.png";
import { baseUrl } from "../../api/baseUrl";

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
        <div className="h-[100px] w-[100vw] flex flex-row items-center justify-center">
            <div className="flex-[0.7] flex flex-row items-center justify-between">
                {/* Nav brand */}
                <div className="flex flex-row items-center">
                    <img src={Logo} className="h-[70px] w-[70px]" />
                    <h1 className="text-3xl text-white font-bold font-[pacifico]">
                        AiBnB
                    </h1>
                </div>

                <div className="flex flex-row space-x-10">
                    {/* Nav items */}
                    {NAV_LINKS.map((link) => (
                        <button
                            onClick={() => handleNavClick(link.label)}
                            key={link.id}
                            className="cursor-pointer text-white bg-transparent"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
