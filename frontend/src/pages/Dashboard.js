import React from "react";

import ShowcaseImage from "../assets/dumbo.jpg";
import ShowcaseContainer from "../components/Utilities/ShowcaseContainer";
import Navbar from "../components/Utilities/Navbar";
import LargeHeading from "../components/Texts/LargeHeading";
import ExtraLargeHeading from "../components/Texts/ExtraLargeHeading";

function Dashboard() {
    return (
        <div className="relative">
            <div className="bg-showcase h-[100vh] w-[100vw] bg-center bg-cover bg-no-repeat">
                {/* Overlay */}
                <div className="bg-black opacity-70 h-[100%] w-[100%] absolute inset-0">
                    <Navbar />

                    {/* Showcase */}
                    <ShowcaseContainer>
                        <div className="height-[100%] space-y-10">
                            <div>
                                <LargeHeading>TRIPS WITH US</LargeHeading>
                            </div>
                            <div className="flex flex-row justify-center">
                                <ExtraLargeHeading>AiBnB</ExtraLargeHeading>
                            </div>
                            <div className="flex flex-row justify-end">
                                <LargeHeading>TRAVEL WITH US</LargeHeading>
                            </div>
                        </div>
                    </ShowcaseContainer>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
