import React from "react";

function NavLink({ navLabel, linkTo }) {
    return <a href={linkTo}>{navLabel}</a>;
}

export default NavLink;
