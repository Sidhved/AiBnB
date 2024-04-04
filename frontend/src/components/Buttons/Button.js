import React from "react";

function Button({ type, label, onClick }) {
    return (
        <button
            className="py-3 bg-blue-500 rounded-full text-white text-sm h-[50px] shadow-lg tracking-widest hover:opacity-90 transition-all"
            style={{ width: "100%" }}
            type={type} // type can be submit
            onClick={onClick} // handle on click
        >
            {/* Text to be displayed inside the button */}
            {label.toUpperCase()}
        </button>
    );
}

export default Button;