import classes from "./PanelButton.module.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function PanelButton({ panelLabel, panelValue, isDate }) {
    const [startDate, setStartDate] = useState(new Date());

    const [inputValue, setInputValue] = useState(panelValue ?? "");

    return (
        <div
            className={`h-[100%] w-[100%] rounded-full flex flex-col justify-center px-10`}
        >
            <div className="flex flex-row items-center space-x-1">
                <span className="text-lg">{panelLabel}</span>
                <ChevronDownIcon className="h-6 w-6 text-blue-600" />
            </div>

            {/* Value */}
            <div>
                {!isDate && (
                    <input
                        placeholder="Search Destination"
                        value={inputValue}
                        className="outline-none border-none"
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                )}
            </div>
        </div>
    );
}

export default PanelButton;
