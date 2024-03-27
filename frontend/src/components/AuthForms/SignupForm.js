import React, { useState } from "react";
import TextBox from "../Inputs/TextBox";
import Button from "../Buttons/Button";
import Logo from "../../assets/aibnb-logo-final.png";
import axios from "axios";
import { baseUrl } from "../../api/baseUrl";

function SignupForm({ showLoginForm }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("123456");

    // function to handle signup
    const onSignup = async () => {
        try {
            const response = await axios.post(`${baseUrl}/auth/addUser/`, {
                email: email,
                password: password,
                firstname: firstName,
                lastname: lastName,
                phone: phone,
            });

        } catch (error) {
            console.log("error while creating account", error);
        }
    };

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
                        <img
                            src={Logo}
                            style={{ height: "100px", width: "100px" }}
                        />
                    </div>

                    {/* Heading for the form */}
                    <h1 className="text-4xl text-gray-700">
                        Create your account
                    </h1>
                </div>

                {/* Caption */}
                <div>
                    <span className="text-gray-700">
                        Hello there! Let's create your account.
                    </span>
                </div>
            </div>

            {/* Input boxes */}
            <div className="space-y-7">
                {/* First Name & Last Name */}
                <div className="flex items-center space-x-5">
                    <TextBox
                        placeholder="First Name"
                        type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <TextBox
                        placeholder="Last Name"
                        type="text"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                {/* Email address */}
                <div>
                    <TextBox
                        placeholder="Email address"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Password */}
                <div>
                    <TextBox
                        placeholder="Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* Terms of Service and policy section */}
                <div className="flex items-center space-x-3">
                    <input type="checkbox" />
                    <span className="text-xs text-gray-700">
                        I agree to the{" "}
                        <button className="text-blue-500">
                            Terms of Service
                        </button>{" "}
                        and{" "}
                        <button className="text-blue-500">
                            Privacy Policy
                        </button>
                    </span>
                </div>

                {/* Sign up button */}
                <div>
                    <Button label="Signup" onClick={onSignup} />
                </div>

                {/* Horizontal Line */}
                <div>
                    <div style={{ height: "2px" }} className="bg-gray-200" />
                </div>

                {/* Log In Link */}
                <div className="text-center">
                    <span className="text-gray-700 text-xs">
                        Joined us before?{" "}
                        <button
                            onClick={showLoginForm}
                            className="text-blue-500"
                        >
                            Log In
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SignupForm;
