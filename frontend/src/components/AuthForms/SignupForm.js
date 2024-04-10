import React, { useState } from "react";
import TextBox from "../Inputs/TextBox";
import Button from "../Buttons/Button";
import axios from "axios";
import { baseUrl } from "../../api/baseUrl";
import LargeHeading from "../Texts/LargeHeading";

function SignupForm({ showLoginForm, onSuccesfulSignUp }) {
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

            onSuccesfulSignUp();

            alert("Account Created Succesfully!");

        } catch (error) {
            console.log("error while creating account", error);
        }
    };

    return (
        <div
            className="space-y-7 flex flex-col w-[50%]"        >
            {/* Form heading */}
            <div className="space-y-3">
                <div>
                    {/* Heading for the form */}
                    <LargeHeading>SIGN UP</LargeHeading>
                </div>

                {/* Caption */}
                <div>
                    <span className="text-gray-300">
                        Hello there! Let's create your account.
                    </span>
                </div>
            </div>

            {/* Input boxes */}
            <div className="space-y-7">
                {/* First Name & Last Name */}
                <div>
                    <TextBox
                        placeholder="First Name"
                        type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
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
                    <span className="text-md text-gray-300">
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
                <div className="flex flex-row">
                    <Button label="Signup" onClick={onSignup} />
                </div>


                {/* Log In Link */}
                <div className="text-center">
                    <span className="text-md text-white">
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
