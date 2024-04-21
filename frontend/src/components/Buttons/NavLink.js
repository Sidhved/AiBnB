import React from "react";
import classes from "./NavLink.module.css";

function NavLink({ navLabel, onClick }) {

    const handleClick = (event) => {
        event.preventDefault();
        onClick();
    };

    return (
        <a className={classes.navLink} href="#" onClick={handleClick}>
            {navLabel}
        </a>
    );
}

export default NavLink;
