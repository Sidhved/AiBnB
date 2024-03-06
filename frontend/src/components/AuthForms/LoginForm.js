import React from "react";
import TextBox from "../Utilities/TextBox";
import Button from "../Utilities/Button";
import Logo from "../../assets/aibnb-logo-final.png";

function LoginForm({ showLoginForm }) {
  return (
    <div
      className="space-y-7"
      style={{
        height: "100%", // inherit the total height of the parent container
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // align the form to the center of the div
      }}
    >
      {/* Form heading */}
      <div className="space-y-7 text-center">
        <div>
          {/* Logo div */}
          <div className="flex items-center justify-center">
            <img src={Logo} style={{ height: "100px", width: "100px" }} />
          </div>

          {/* Heading for the form */}
          <h1 className="text-4xl text-gray-700">Log in</h1>
        </div>

        {/* Caption */}
        <div>
          <span className="text-gray-700">
            Velit non ipsum sint in id proident in sunt.
          </span>
        </div>
      </div>

      {/* Input boxes */}
      <div className="space-y-7">
        {/* Email address */}
        <div>
          <TextBox placeholder="Email address" />
        </div>

        {/* Password */}
        <div>
          <TextBox placeholder="Password" />
        </div>

        {/* Sign up button */}
        <div>
          <Button label="Login" />
        </div>

        {/* Horizontal Line */}
        <div>
          <div style={{ height: "2px" }} className="bg-gray-200" />
        </div>

        {/* Log In Link */}
        <div className="text-center">
          <span className="text-gray-700 text-xs">
            Don't have an account?{" "}
            <button onClick={showLoginForm} className="text-blue-500">Sign Up</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
