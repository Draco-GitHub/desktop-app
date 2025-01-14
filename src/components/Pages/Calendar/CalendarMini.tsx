import "./CalendarMini.css";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "../../../assets/Icons";
import CalendarProps from "./Modes/CalendarProps.tsx";

const CalendarMini: React.FC<CalendarProps> = ({ currentDate, setSelectedDate }: CalendarProps) => {
    const [displayedDate, setDisplayedDate] = useState(currentDate);
    const [selectedDate, setSelectedDateState] = useState<Date | null>(null); // Tracks the selected date

    const currentYear = displayedDate.getFullYear();
    const currentMonth = displayedDate.getMonth();
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysInPreviousMonth = new Date(currentYear, currentMonth, 0).getDate();
    const days = [];

    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
        days.push({
            day: daysInPreviousMonth - i,
            isCurrentMonth: false,
            date: new Date(currentYear, currentMonth - 1, daysInPreviousMonth - i),
        });
    }

    for (let i = 1; i <= daysInMonth; i++) {
        days.push({
            day: i,
            isCurrentMonth: true,
            isToday: currentYear === todayYear && currentMonth === todayMonth && i === todayDay,
            date: new Date(currentYear, currentMonth, i),
        });
    }

    const totalDaysDisplayed = days.length;
    const totalWeeks = Math.ceil(totalDaysDisplayed / 7);
    const remainingDays = totalWeeks * 7 - totalDaysDisplayed;

    for (let i = 1; i <= remainingDays; i++) {
        days.push({
            day: i,
            isCurrentMonth: false,
            date: new Date(currentYear, currentMonth + 1, i),
        });
    }

    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
        weeks.push(days.slice(i, i + 7));
    }

    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    const changeMonth = (direction: "prev" | "next") => {
        const newDate = new Date(displayedDate);
        if (direction === "prev") {
            newDate.setMonth(displayedDate.getMonth() - 1);
        } else {
            newDate.setMonth(displayedDate.getMonth() + 1);
        }
        setDisplayedDate(newDate);
    };

    const handleDayClick = (date: Date) => {
        setSelectedDateState(date); // Update selected date state
        setSelectedDate && setSelectedDate(date); // Call the provided callback
    };

    return (
        <div className="calendar-mini">
            <div className="d-flex justify-content-between gap-2 align-items-center" style={{background: "#272727"}}>
                {months[currentMonth]} {currentYear}
                <div className="d-flex">
                    <StarIcon className="bg-hover-effect"/>
                    <ChevronLeftIcon className="bg-hover-effect" onClick={() => changeMonth("prev")}/>
                    <ChevronRightIcon className="bg-hover-effect" onClick={() => changeMonth("next")}/>
                </div>
            </div>
            <div className="d-flex flex-row" style={{fontWeight: "bold"}}>
                <div className="day">S</div>
                <div className="day">M</div>
                <div className="day">T</div>
                <div className="day">W</div>
                <div className="day">T</div>
                <div className="day">F</div>
                <div className="day">S</div>
            </div>
            <div>
                {weeks.map((week, index) => (
                    <div className="d-flex flex-row" key={index}>
                        {week.map((dayObj, dayIndex) => (
                            <div
                                className={`day bg-hover-effect ${selectedDate?.toDateString() === dayObj.date.toDateString() ? "selected" : ""} ${
                                    dayObj.isToday ? "today" : ""
                                }`}
                                key={dayIndex}
                                onClick={() => handleDayClick(dayObj.date)}
                            >
                                {dayObj.day}
                            </div>

                        ))}
                    </div>
                ))}
            </div>

        </div>
    );

};

export default CalendarMini;
