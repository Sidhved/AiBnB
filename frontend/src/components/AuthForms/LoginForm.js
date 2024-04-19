import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import TextBox from "../Inputs/TextBox";
import Button from "../Buttons/Button";
import LargeHeading from "../Texts/LargeHeading";
import { authQueries } from "../../api/authQueries";

function LoginForm({ showLoginForm }) {
    // STATES
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // HOOKS
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // function to login user
    const onLogin = async () => {
        const isUserLoggedIn = await authQueries.loginUser(
            email,
            password,
            dispatch
        );

        // if user is logged in
        if (isUserLoggedIn === true) {
            navigate("/dashboard");
        } else {
            // reset the input states
            resetStates();
        }
    };

    // function to reset states
    const resetStates = () => {
        setEmail("");
        setPassword("");
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
                        value={email}
                        placeholder="Email address"
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Password */}
                <div>
                    <TextBox
                        value={password}
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
