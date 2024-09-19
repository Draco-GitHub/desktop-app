import React, {useState} from "react";
import "./Calendary.css";
import {CalendarIcon, CogIcon, SearchIcon} from "../../assets/Icons";
import Hamburger from "../../assets/Icons/Hamburger.tsx";
import Daily from "./Modes/Daily.tsx";
import Monthly from "./Modes/Monthly.tsx";
import Weekly from "./Modes/Weekly.tsx";

const Calendar: React.FC = () => {
    const [currentMode, changeMode] = useState<"day" | "week" | "month">("month");

    const modes: { [key: string]: JSX.Element } = {
        "day": <Daily/>,
        "week": <Weekly/>,
        "month": <Monthly/>
    };

    return (
        <React.Fragment>
            <div className="calendar">
                <div className="top-nav">
                    <div className="calendar-view">
                        <Hamburger className={"bg-hover-effect"}/>
                    </div>
                    <div className="calendar-mode">
                        <div className="selector bg-hover-effect selected" onClick={() => changeMode("day")}><CalendarIcon/>Day</div>
                        <div className="selector bg-hover-effect" onClick={() => changeMode("week")}><CalendarIcon/>Week</div>
                        <div className="selector bg-hover-effect" onClick={() => changeMode("month")}><CalendarIcon/>Month</div>
                    </div>
                    <div className="options">
                        <SearchIcon className={"bg-hover-effect"}/>
                        <CogIcon className={"bg-hover-effect"}/>
                    </div>
                </div>
                <div className="calendar-container">
                    <div className="calendar-mini">

                    </div>
                    <div className="calendar-main">
                        {modes[currentMode]}
                    </div>
                    <div className="calendar-day">

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Calendar;
