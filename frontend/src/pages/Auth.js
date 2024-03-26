import React, { useState } from "react";
import ShowcaseContainer from "../components/Utilities/ShowcaseContainer";
import ShowCaseImage from "../assets/manhattan.jpg";
import SignupForm from "../components/AuthForms/SignupForm";
import LoginForm from "../components/AuthForms/LoginForm";

function Auth() {
  // STATES
  const [toShowLoginForm, setToShowLoginForm] = useState(false); // to show login form

  const showLoginForm = () => {
    setToShowLoginForm(!toShowLoginForm);
  };

  return (
    <ShowcaseContainer>
      <div className="space-x-5 flex h-[100%]">
        {/* Showcase Image */}
        <div
          className="h-[100%] flex-1 rounded-3xl overflow-hidden shadow-xl"
        >
          <img
            className="object-cover h-[100%] w-[100%]" // fit the image into the parent container
            src={ShowCaseImage} // modify the image source to change the image
          />
        </div>

        {/* Forms */}
        <div
          className="flex-1 flex items-center justify-center h-[100%]"
        >
          <div className="flex-[0.5]">
            {toShowLoginForm ? (
              <LoginForm showLoginForm={showLoginForm} />
            ) : (
              <SignupForm showLoginForm={showLoginForm} />
            )}
          </div>
        </div>
      </div>
    </ShowcaseContainer>
  );
}

export default Auth;
