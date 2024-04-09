import React from "react";
import classes from "./NavLink.module.css";

function NavLink({ navLabel, linkTo }) {
    return (
        <a className={classes.navLink} href={linkTo}>
            {navLabel}
        </a>
    );
}

export default NavLink;
