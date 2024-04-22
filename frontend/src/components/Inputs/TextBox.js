import React from "react";

function TextBox({ placeholder, value, onChange, type }) {
  return (
    <input
      className="h-[50px] p-4 bg-transparent text-white shadow-lg outline-none border-b-2 border-white  w-[100%]"
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
}

export default TextBox;
