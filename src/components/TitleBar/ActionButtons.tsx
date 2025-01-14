import {CalendarIcon, CogIcon, EnvelopeIcon, HeadphonesIcon} from "../../assets/Icons";
import Settings3 from "../Pages/Settings/Settings3.tsx";
import Calendar from "../Pages/Calendar/Calendar.tsx";
import {Page} from "../Page.tsx";
import React from "react";

const ActionButtons: React.FC<{ openPage: (page: Page) => void }> = ({openPage}) => {
    return (
        <div className="d-flex flex-row me-2">
            <CogIcon className={`bg-hover-effect`} onClick={()=> openPage({title:"Settings", content:<Settings3/>})} />
            <CalendarIcon className={`bg-hover-effect `} onClick={()=> openPage({title:"Calendar", content:<Calendar/>})}/>
            <HeadphonesIcon className={`bg-hover-effect`} onClick={()=> openPage({title:"", content:<div/>})} />
            <EnvelopeIcon className={`bg-hover-effect`} onClick={()=> openPage({title:"", content:<div/>})} />
        </div>
    );
}

export default ActionButtons;