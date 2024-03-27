import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { baseUrl } from "../../api/baseUrl";
import { userActionTypes } from "../../store/UserReducer/UserActionTypes";
import TextBox from "../Inputs/TextBox";
import Button from "../Buttons/Button";
import Logo from "../../assets/aibnb-logo-final.png";

function LoginForm({ showLoginForm }) {
    // Declare navigation and dispatch instance
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // function to handle login
    const onLogin = async () => {
        try {
            const response = await axios.post(`${baseUrl}/auth/login/`, {
                user_id: email,
                password: password,
            });

            const { token } = response.data;

            dispatch({
                type: userActionTypes.SET_AUTH_TOKEN,
                payload: { token: token },
            });

            navigate("/dashboard");


        } catch (error) {
            console.log("error while logging in", error);
        }
    };

    return (
        <div
            className="space-y-7 w-[100%]"
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
                    <h1 className="text-4xl text-gray-700">Log in</h1>
                </div>

                {/* Caption */}
                <div>
                    <span className="text-gray-700">
                        Please login using your email address and password:
                    </span>
                </div>
            </div>

            {/* Input boxes */}
            <div className="space-y-7">
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

                {/* Sign up button */}
                <div>
                    <Button label="Login" onClick={onLogin} />
                </div>

                {/* Horizontal Line */}
                <div>
                    <div style={{ height: "2px" }} className="bg-gray-200" />
                </div>

                {/* Log In Link */}
                <div className="text-center">
                    <span className="text-gray-700 text-xs">
                        Don't have an account?{" "}
                        <button
                            onClick={showLoginForm}
                            className="text-blue-500"
                        >
                            Sign Up
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
