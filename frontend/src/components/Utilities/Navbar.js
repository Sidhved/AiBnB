import React from "react";

import Logo from "../../assets/aibnb-logo-final.png";
import { NavLink } from "react-router-dom";

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
        label: "Profle",
        linkTo: "/profile",
    },
];

function Navbar() {
    return (
        <div className="h-[100px] w-[100vw] flex flex-row items-center justify-center">
            <div className="flex-[0.7] flex flex-row items-center justify-between">
                {/* Nav brand */}
                <div className="flex flex-row items-center">
                    <img src={Logo} className="h-[70px] w-[70px]" />
                    <h1 className="text-3xl text-white font-bold font-[pacifico]">AiBnB</h1>
                </div>

                <div className="flex flex-row space-x-10">
                    {/* Nav items */}
                    {NAV_LINKS.map((link) => (
                        <a key={link.id} className="cursor-pointer text-white" href={link.linkTo}>
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
