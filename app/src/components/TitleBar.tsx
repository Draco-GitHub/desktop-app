import "./Styles/TitleBar.css";
import { appWindow } from "@tauri-apps/api/window";

import React, { useState } from "react";
import {
    CalendarIcon,
    CircleXIcon,
    CogIcon,
    EnvelopeIcon,
    HamburgerIcon,
    HeadphonesIcon, MaximizeIcon,
    MinusIcon, RestoreIcon, XIcon
} from "../assets/Icons";
import Settings from "./Settings/Settings.tsx";

import Calendar from "./Calendar/Calendar.tsx"

const TitleBar: React.FC<{ openPage: (page: React.ReactNode) => void }> = ({ openPage }) => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(true);
    const [isMaximized, setIsMaximized] = useState<boolean>(false);
    const [isHidden, setIsHidden] = useState<boolean>(false);

    const hamburgerToggle = () => {
        setIsHamburgerOpen(prevState => !prevState);
        setIsHidden(prevState => !prevState);
    };

    const maximizeToggle = async () => {
        if (await appWindow.isMaximized()) {
            await appWindow.unmaximize();
            setIsMaximized(false);
        } else {
            await appWindow.maximize();
            setIsMaximized(true);
        }
    };

    return (
        <div className="title-bar" data-tauri-drag-region>
            <div className="title-button-container action-bar">
                {isHamburgerOpen ? <CircleXIcon className={"bg-hover-effect"} onClick={hamburgerToggle} /> : <HamburgerIcon className={"bg-hover-effect"} onClick={hamburgerToggle}/>}
                <div id="title-bar-actions">
                    <CogIcon className={`bg-hover-effect ${isHidden ? 'hidden' : ''}`} onClick={()=> openPage(<Settings/>)} />
                    <CalendarIcon className={`bg-hover-effect ${isHidden ? 'hidden' : ''}`} onClick={()=> openPage(<Calendar/>)}/>
                    <HeadphonesIcon className={`bg-hover-effect ${isHidden ? 'hidden' : ''}`} onClick={()=> openPage(<div/>)} />
                    <EnvelopeIcon className={`bg-hover-effect ${isHidden ? 'hidden' : ''}`} onClick={()=> openPage(<div/>)} />
                </div>
            </div>

            <div id="window-controls" className="title-button-container">
                <MinusIcon className={"bg-hover-effect"} onClick={()=>appWindow.minimize()}/>
                {isMaximized ? <RestoreIcon className={"bg-hover-effect"} onClick={maximizeToggle}/> : <MaximizeIcon className={"bg-hover-effect"} onClick={maximizeToggle} />}
                <XIcon id={'title-close'} onClick={()=>appWindow.close()}/>
            </div>
        </div>
    );
}

export default TitleBar;
