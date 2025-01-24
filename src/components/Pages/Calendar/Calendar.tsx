import React, {JSX, useEffect, useState} from "react";
import "./Calendar.css";
import {CogIcon, SearchIcon, CalendarIcon, CircleCheckIcon} from "../../../assets/Icons";
import {Day, Week, Month, Year, Schedule, XDays } from "./Modes"
import CalendarMini from "./CalendarMini.tsx";
import {DropdownInput} from "../../Inputs";

const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [selectedDate, setSelectedDate] = useState<Date>(currentDate);
    const [selectedMode, setSelectedMode] = useState<string>("Day");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);


    const modes: { [key: string]: JSX.Element } = {
        "Day": <Day currentDate={currentDate}/>,
        "Week": <Week currentDate={currentDate}/>,
        "Month": <Month currentDate={currentDate}/>,
        "Year": <Year currentDate={currentDate}/>,
        "Schedule": <Schedule currentDate={currentDate}/>,
        "4 days": <XDays currentDate={currentDate}/>,
    };

    const handleSelectionChange = (value: string) => {
        setSelectedMode(value);
        console.log("Selected Value:", value);
    };

    return (
        <div className="d-flex flex-column flex-grow-1">
            <div className="d-flex flex-row justify-content-end p-1">
                <SearchIcon className="bg-hover-effect"/>
                <CogIcon className="bg-hover-effect"/>
                <DropdownInput className="bg-hover-effect" dropdownItems={Object.keys(modes)} onSelectionChange={handleSelectionChange}/>
                <CalendarIcon className="bg-hover-effect mode-selected"/>
                <CircleCheckIcon className="bg-hover-effect"/>
            </div>
            <div className="d-flex flex-row flex-grow-1" >
                <div className="d-flex flex-column" style={{width: "250px", padding:"0 16px", flexShrink: 0}}>
                    <CalendarMini currentDate={currentDate} setSelectedDate={setSelectedDate}/>
                </div>
                <div className="d-flex flex-column flex-grow-1 p-2 " style={{background: "#272727", borderTopLeftRadius: "10px", borderLeft: "1px solid var(--border-color)", borderTop: "1px solid var(--border-color)"}}>
                    <div className="d-flex flex-row justify-content-between rounded-2 bg-hover-effect" style={{fontWeight: "700", fontSize: "18pt", paddingInline: "10px"}}>
                        <span>{selectedDate.toDateString()}</span>
                        <span>September 2024 - September 2025</span>
                    </div>
                    <div className="d-flex flex-column flex-grow-1 p-2">
                        {modes[selectedMode]}
                    </div>
                </div>
            </div>
        </div>
);
};

export default Calendar;
