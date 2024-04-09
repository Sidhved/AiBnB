import classes from "./Dashboard.module.css";

import React, { useState } from "react";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

import ShowcaseContainer from "../components/Utilities/ShowcaseContainer";
import Navbar from "../components/Utilities/Navbar";
import LargeHeading from "../components/Texts/LargeHeading";
import ExtraLargeHeading from "../components/Texts/ExtraLargeHeading";
import PanelButton from "../components/Dashboard/PanelButton";
import { destinations } from "../constants/destinationData";

function Dashboard() {
    const [showBuildLabel, setShowBuildLabel] = useState(false);

    const [showDestinations, setShowDestinations] = useState(false);

    return (
        <div className="relative">
            <div className="bg-showcase h-[100vh] w-full bg-center bg-cover bg-no-repeat relative overflow-x-hidden">
                {/* Overlay */}
                <div className="h-[100%] w-[100%] bg-black opacity-50 absolute"></div>

                <div className="z-40 absolute">
                    <Navbar />

                    {/* Showcase */}
                    <ShowcaseContainer>
                        <div className="space-y-10 mb-20">
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

                        {/* Input Box */}
                        <div className="h-[100px] w-[100%] bg-white rounded-full shadow-xl flex flex-row items-center space-x-2">
                            {/* Destination */}
                            <div className="flex flex-1 h-[100%] relative">
                                <PanelButton
                                    onClick={() =>
                                        setShowDestinations(!showDestinations)
                                    }
                                    panelLabel="Destination"
                                    panelValue="New York, NY"
                                />

                                {/* Destination Suggestions Modal */}
                                {showDestinations && (
                                    <div className="absolute bg-white w-[300px] p-5 rounded-xl shadow-lg flex flex-col top-[110%]">
                                        {destinations.map((destination) => (
                                            <button className="cursor-pointer text-left py-5">
                                                {destination.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {/* Check In Date */}
                            <div className="flex flex-2 h-[100%]">
                                <PanelButton
                                    panelLabel="Check in Date"
                                    isDate={true}
                                />
                            </div>
                            {/* Check out Date */}
                            <div className="flex flex-2 h-[100%]">
                                <PanelButton
                                    panelLabel="Check out Date"
                                />
                                
                            </div>
                            {/* Guests */}
                            <div className="flex flex-2 h-[100%]">
                                <PanelButton
                                    panelLabel="Guests"
                                    panelValue="2"
                                />
                            </div>

                            {/* Let's Go button */}
                            <div className="flex flex-[0.5] h-[100%] flex-row items-center justify-end px-5">
                                <button
                                    onMouseOver={() => setShowBuildLabel(true)}
                                    onMouseLeave={() =>
                                        setShowBuildLabel(false)
                                    }
                                    className="bg-blue-600 h-10 px-3 rounded-full cursor-pointer flex flex-row items-center justify-center"
                                >
                                    <span
                                        className={`text-white ${
                                            showBuildLabel
                                                ? classes.showBuildLabel
                                                : classes.buildLabel
                                        }`}
                                    >
                                        Build!
                                    </span>
                                    <ArrowRightIcon color="#fff" height={20} />
                                </button>
                            </div>
                        </div>
                    </ShowcaseContainer>
                </div>
            </div>

            <div className="h-[60vh] bg-white"></div>
        </div>
    );
}

export default Dashboard;
