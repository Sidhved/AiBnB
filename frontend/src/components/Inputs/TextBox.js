import React from "react";

function TextBox({ placeholder, value, onChange }) {
  return (
    <input
      style={{ borderWidth: "1px", width: "100%" }}
      className="bg-white border-gray-200 rounded-lg py-3 px-2 text-xs"
      type="text"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
}

export default TextBox;
