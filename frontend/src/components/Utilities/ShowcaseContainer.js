import React from "react";

function ShowcaseContainer({ children }) {
    return (
        <div className="flex flex-row justify-center h-[80vh] items-center">
            <div className="flex-[0.7]">
                {/* Render the child components */}
                {children}
            </div>
        </div>
    );
}

export default ShowcaseContainer;
