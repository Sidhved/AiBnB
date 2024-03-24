import React from "react";

function ShowcaseContainer({ children }) {
  return (
    <div
      className="overflow-auto bg-gray-100"
      style={{
        // Center the child container
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        // Set the height and width to cover the whole screen
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          height: "90%", // set the height to be 90%
          flex: 0.95, // set the width of the container to be 95% of the parent container
        }}
      >
        {/* Render the child components */}
        {children}
      </div>
    </div>
  );
}

export default ShowcaseContainer;
