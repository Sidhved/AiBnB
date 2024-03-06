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
      <div style={{ height: "100%" }} className="space-x-5 flex">
        {/* Showcase Image */}
        <div
          style={{ height: "100%" }}
          className="flex-1 rounded-3xl overflow-hidden shadow-xl"
        >
          <img
            className="object-cover" // fit the image into the parent container
            style={{ height: "100%", width: "100%" }}
            src={ShowCaseImage} // modify the image source to change the image
          />
        </div>

        {/* Forms */}
        <div
          style={{ height: "100%" }}
          className="flex-1 flex items-center justify-center"
        >
          <div style={{ height: "100%", width: "50%" }}>
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
