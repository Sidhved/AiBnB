import React, { useState } from "react";
import ShowcaseContainer from "../components/Utilities/ShowcaseContainer";
import ShowCaseImage from "../assets/manhattan.jpg";
import SignupForm from "../components/AuthForms/SignupForm";
import LoginForm from "../components/AuthForms/LoginForm";
import Logo from "../assets/logo.jpg";

function Auth() {
    // STATES
    const [toShowLoginForm, setToShowLoginForm] = useState(false); // to show login form

    const showLoginForm = () => {
        setToShowLoginForm(!toShowLoginForm);
    };

    return (
        <div className="h-[100vh] bg-black py-10">
            <ShowcaseContainer>
                <div className="flex flex-col h-[100%]">
                    <div className="h-10 flex flex-row items-center justify-end space-x-2 ">
                        <img src={Logo} className="h-[100%]" />
                        <span className="font-[arizonia] text-2xl text-white">
                            AiBnB
                        </span>
                    </div>
                    {/* Forms */}
                    <div className="p-5 flex flex-1 flex-col justify-center">
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
            </ShowcaseContainer>
        </div>
    );
}

export default Auth;
