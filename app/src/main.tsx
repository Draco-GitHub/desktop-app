import "./components/Styles/main.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import TitleBar from "./components/TitleBar.tsx";

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<React.ReactNode>(null);

    const openPage = (page: React.ReactNode) => {
        setCurrentPage(page);
    };

    return (
        <div className="app-container">
            <div className="content-container">
                {/*<Background />*/}
                {currentPage}
            </div>
            <TitleBar openPage={openPage} />
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

