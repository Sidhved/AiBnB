import React, { useState } from "react";
import ShowcaseContainer from "../components/Utilities/ShowcaseContainer";
import ShowCaseImage from "../assets/manhattan.jpg";
import SignupForm from "../components/AuthForms/SignupForm";
import LoginForm from "../components/AuthForms/LoginForm";
import Logo from "../assets/logo.png";

function Auth() {
    // STATES
    const [toShowLoginForm, setToShowLoginForm] = useState(false); // to show login form

    const showLoginForm = () => {
        setToShowLoginForm(!toShowLoginForm);
    };

    return (
        <div className="flex h-[100vh] bg-gray-100 overflow-hidden">
            {/* Showcase Image */}
            <div className="flex-[0.5]">
                <img
                    className="object-cover h-[100%] w-[100%]" // fit the image into the parent container
                    src={ShowCaseImage} // modify the image source to change the image
                />
            </div>

            {/* Forms */}
            <div className="flex-[0.5] p-5">
                <div className="h-10 flex flex-row items-center justify-end space-x-">
                    <img src={Logo} className="h-[100%]" />
                    <span className="font-[pacifico]">AiBnB</span>
                </div>
                <div className="flex items-center justify-center h-[100%]">
                    {toShowLoginForm ? (
                        <LoginForm showLoginForm={showLoginForm} />
                    ) : (
                        <SignupForm
                            showLoginForm={showLoginForm}
                            onSuccesfulSignUp={showLoginForm}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Auth;
