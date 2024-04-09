import React from "react";

function ShowcaseContainer({ children }) {
    return (
        <div className="flex flex-row h-[80vh] justify-center">
            <div className="flex-[0.7]">
                {/* Render the child components */}
                {children}
            </div>
        </div>
    );
}

export default ShowcaseContainer;
