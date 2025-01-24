import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import {Page} from "./components/Page.tsx";
import {invoke} from "@tauri-apps/api/core";
import Settings from "./components/Pages/Settings/Settings.tsx";
import SideNav from "./components/Sidenav/Sidenav.tsx";

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>({
        title: "Home",
        content: <div>Welcome to the app!</div>,
    });
    const [settingsDisplayed, setSettingsDisplayed] = useState<boolean>(false);

    const openPage = (page: Page) => {
        setCurrentPage(page);
        invoke("set_title", {title: page.title});
    };

    const toggleSettings = () => {
        setSettingsDisplayed((prev) => !prev);
    };

    return (
        <div className="app-container d-flex flex-row flex-grow-1" style={{maxWidth: "100vw"}}>
            {settingsDisplayed && <Settings toggleSettings={toggleSettings}/>}
            <SideNav openPage={openPage} toggleSettings={toggleSettings}/>
            <div className="page-content d-flex flex-grow-1">{currentPage.content}</div>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
