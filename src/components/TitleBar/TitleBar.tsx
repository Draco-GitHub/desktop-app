import WindowControls from "./WindowControls.tsx";
import ActionButtons from "./ActionButtons.tsx";
import InfoSection from "./InfoSection.tsx";
import React from "react";
import { Page } from "../Page.tsx";

const TitleBar: React.FC<{ openPage: (page: Page) => void; currentPage: Page }> = ({ openPage, currentPage }) => {
    return (
        <div className="d-flex flex-row" data-tauri-drag-region style={{ height: "30px" }}>
            <ActionButtons openPage={openPage} />
            <InfoSection text={currentPage.title} />
            <WindowControls />
        </div>
    );
};

export default TitleBar;
