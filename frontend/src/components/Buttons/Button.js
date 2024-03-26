import React from "react";

function Button({ type, label, onClick }) {
  return (
    <button
      className="py-3 bg-blue-500 rounded-lg text-white text-sm shadow-lg"
      style={{ width: "100%" }}
      type={type} // type can be submit
      onClick={onClick} // handle on click
    >
      {/* Text to be displayed inside the button */}
      {label}
    </button>
  );
}

export default Button;
