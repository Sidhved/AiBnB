import React from "react";
import classes from "./NavLink.module.css";
import { useNavigate } from "react-router-dom";

function NavLink({ navLabel, linkTo }) {
    const navigate  = useNavigate();

    return (
        <button className={classes.navLink} onClick={() => navigate(linkTo)}>
            {navLabel}
        </button>
    );
}

export default NavLink;
