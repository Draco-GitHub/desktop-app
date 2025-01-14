import React, {JSX, useEffect, useState} from "react";
import "./Calendary.css";
import {CogIcon, SearchIcon, CalendarIcon, CircleCheckIcon} from "../../../assets/Icons";
import {Day, Week, Month, Year, Schedule, XDays } from "./Modes"
import CalendarMini from "./CalendarMini.tsx";
import {DropdownInput} from "../../Inputs";

const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [selectedDate, setSelectedDate] = useState<Date>(currentDate);
    const [selectedMode, setSelectedMode] = useState<string>("Month");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const dropdownItems = ["Day","Week","Month","Year","Schedule","4 days"];

    const isSameDate = (date1: Date, date2:Date): boolean => {
        return date1.getUTCFullYear() === date2.getUTCFullYear() &&
            date1.getUTCMonth() === date2.getUTCMonth() &&
            date1.getUTCDate() === date2.getUTCDate();
    }

    const modes: { [key: string]: JSX.Element } = {
        "Day": <Day currentDate={currentDate}/>,
        "Week": <Week currentDate={currentDate}/>,
        "Month": <Month currentDate={currentDate}/>,
        "Year": <Year currentDate={currentDate}/>,
        "Schedule": <Schedule currentDate={currentDate}/>,
        "4 days": <XDays currentDate={currentDate}/>,
    };

    const handleSelectionChange = (value: string) => {
        setSelectedMode(value); // Update parent state with the selected value
        console.log("Selected Value:", value); // Log or do something with the value
    };

    return (
        <React.Fragment>
            <div className="d-flex flex-row flex-grow-1">
                <div className="d-flex flex-column">
                    <CalendarMini currentDate={currentDate} setSelectedDate={setSelectedDate} />
                </div>
                <div className="d-flex flex-column flex-grow-1">
                    <div className="d-flex flex-row justify-content-end" style={{background: "#272727"}}>
                        <SearchIcon className="bg-hover-effect"/>
                        <CogIcon className="bg-hover-effect"/>
                        <DropdownInput className="bg-hover-effect" dropdownItems={dropdownItems} onSelectionChange={handleSelectionChange}/>
                        <CalendarIcon className="bg-hover-effect mode-selected"/>
                        <CircleCheckIcon className="bg-hover-effect"/>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <div className="control-today bg-hover-effect">
                            {isSameDate(currentDate, selectedDate) ? "Today": selectedDate.toDateString()}
                        </div>
                        <h3>September 2024 - September 2025</h3>
                    </div>
                    {modes[selectedMode]}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Calendar;
