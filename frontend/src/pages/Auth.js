import React from "react";
import ShowcaseContainer from "../components/Utilities/ShowcaseContainer";
import ShowCaseImage from "../assets/dumbo.jpg";

function Auth() {
  return (
    <ShowcaseContainer>
      <div style={{ height: "100%" }} className="space-x-5 flex">
        
        {/* Showcase Image */}
        <div
          style={{ height: "100%" }}
          className="flex-1 rounded-3xl overflow-hidden"
        >
          <img
            className="object-cover" // fit the image into the parent container
            style={{ height: "100%", width: "100%" }}
            src={ShowCaseImage} // modify the image source to change the image
          />
        </div>

        {/* Forms */}
        <div style={{ height: "100%" }} className="flex-1">
          
        </div>
      </div>
    </ShowcaseContainer>
  );
}

export default Auth;
