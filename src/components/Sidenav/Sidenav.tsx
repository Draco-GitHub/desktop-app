import React from "react";
import {Page} from "../Page.tsx";
import {CalendarIcon, CogIcon, EnvelopeIcon, HeadphonesIcon} from "../../assets/Icons";
import Calendar from "../Pages/Calendar/Calendar.tsx";

const SideNav: React.FC<{ openPage: (page: Page) => void; toggleSettings: () => void }> = ({openPage, toggleSettings}) => {
    return (
        <div className="d-flex flex-column align-items-center p-3" style={{background: "#272727", width: "40px", borderRight: "1px solid var(--border-color)"}}>
            <CogIcon className="bg-hover-effect" onClick={toggleSettings}/>
            <CalendarIcon className="bg-hover-effect" onClick={() => openPage({title: "Calendar", content: <Calendar/>} )} />
            <HeadphonesIcon className="bg-hover-effect" onClick={() => openPage({title: "Music", content: <div>Music</div>} )} />
            <EnvelopeIcon className="bg-hover-effect" onClick={() => openPage({title: "Messages", content: <div>Messages</div>} )} />
        </div>
    );
};

export default SideNav;
