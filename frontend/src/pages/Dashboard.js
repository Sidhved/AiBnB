import React from "react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

import ShowcaseContainer from "../components/Utilities/ShowcaseContainer";
import Navbar from "../components/Utilities/Navbar";
import LargeHeading from "../components/Texts/LargeHeading";
import ExtraLargeHeading from "../components/Texts/ExtraLargeHeading";

function Dashboard() {

    return (
        <div className="relative">
            <div className="bg-showcase h-[130vh] w-full bg-center bg-cover bg-no-repeat relative overflow-x-hidden">
                {/* Overlay */}
                <div className="h-[100%] w-[100%] bg-black opacity-50 absolute"></div>

                <div className="z-40 absolute">
                    <Navbar />

                    {/* Showcase */}
                    <ShowcaseContainer>
                        <div className="h-[100%] space-y-10 mb-20">
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
                        <div className="h-[100px] w-[100%] bg-white rounded-full shadow-xl flex flex-row py-5 px-20 items-center space-x-10">
                            {/* Destination */}
                            <div className="border-r-2 flex-1 h-[80%] flex flex-col justify-center">
                                <div className="flex flex-row items-center space-x-1">
                                    <span className="text-lg">Destination</span>
                                    <ChevronDownIcon className="h-6 w-6 text-blue-600" />
                                </div>

                                {/* Value */}
                                <div>
                                    <span className="text-gray-600">
                                        New York, NY
                                    </span>
                                </div>
                            </div>
                            {/* Check In Date */}
                            <div className="flex-1 border-r-2 h-[80%] flex flex-col justify-center ">
                                <div className="flex flex-row items-center space-x-1">
                                    <span className="text-lg">Check In</span>
                                    <ChevronDownIcon className="h-6 w-6 text-blue-600" />
                                </div>

                                {/* Value */}
                                <div>
                                    <span className="text-gray-600">
                                        24 Sept 2023
                                    </span>
                                </div>
                            </div>

                            {/* CHeck out Date */}
                            <div className="flex-1 border-r-2 h-[80%] flex flex-col justify-center">
                                <div className="flex flex-row items-center space-x-1">
                                    <span className="text-lg">Check Out</span>
                                    <ChevronDownIcon className="h-6 w-6 text-blue-600" />
                                </div>

                                {/* Value */}
                                <div>
                                    <span className="text-gray-600">
                                        24 Sept 2023
                                    </span>
                                </div>
                            </div>

                            {/* Guests */}
                            <div className="flex-1 flex-col justify-center">
                                <div className="flex flex-row items-center space-x-1">
                                    <span className="text-lg">Guests</span>
                                    <ChevronDownIcon className="h-6 w-6 text-blue-600" />
                                </div>

                                {/* Value */}
                                <div>
                                    <span className="text-gray-600">
                                        2 Guests
                                    </span>
                                </div>
                            </div>
                        </div>
                    </ShowcaseContainer>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
