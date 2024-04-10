import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { baseUrl } from "../../api/baseUrl";
import { userActionTypes } from "../../store/UserReducer/UserActionTypes";
import TextBox from "../Inputs/TextBox";
import Button from "../Buttons/Button";
import Logo from "../../assets/logo.jpg";
import LargeHeading from "../Texts/LargeHeading";

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
        <div className="space-y-7 w-[50%]">
            {/* Form heading */}
            <div className="space-y-7">
                <div>
                    {/* Heading for the form */}
                    <LargeHeading>LOG IN</LargeHeading>
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


                {/* Log In Link */}
                <div className="text-center">
                    <span className="text-md text-gray-400">
                        Don't have an account?{" "}
                        <button
                            onClick={showLoginForm}
                            className="text-blue-500 underline"
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
