import {MaximizeIcon, MinusIcon, XIcon} from "../../assets/Icons";
import {getCurrentWindow} from "@tauri-apps/api/window";
import React from "react";


const WindowControls: React.FC = () => {

    const maximizeToggle = async () => {

        if (await getCurrentWindow().isMaximized()) {
            await getCurrentWindow().unmaximize();
        } else {
            await getCurrentWindow().maximize();
        }
    };

    return (
        <div className="d-flex flex-row ms-2 align-items-center">
            <MinusIcon className="bg-hover-effect" onClick={() => getCurrentWindow().minimize()}/>
            <MaximizeIcon className="bg-hover-effect" onClick={maximizeToggle}/>
            <XIcon className="bg-hover-effect" onClick={() => getCurrentWindow().close()}/>
        </div>
    );
}

export default WindowControls;
