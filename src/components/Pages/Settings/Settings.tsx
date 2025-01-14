import React, { useEffect, useState } from "react";
import "./Settings.css";
import { TextInput } from "../../Inputs";
import {
    BellIcon,
    BrushIcon,
    ExternalLinkIcon,
    KeyboardIcon,
    PencilIcon,
    SearchIcon,
} from "../../../assets/Icons";
import { Appearance } from "./Appearance";

const Settings: React.FC<{ toggleSettings: () => void }> = ({ toggleSettings }) => {
    const [currentPage, setCurrentPage] = useState<React.ReactNode>(<Appearance />);
    const [selectedCategory, setSelectedCategory] = useState<string>("appearance");
    const [searchInputValue, setSearchInputValue] = useState<string>("");
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        // Trigger fade-in when the component mounts
        setTimeout(() => setIsVisible(true), 10);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(toggleSettings, 300); // Match the CSS transition duration
    };

    const categories = [
        { id: "general", label: "General", icon: <PencilIcon /> },
        { id: "appearance", label: "Appearance", icon: <BrushIcon /> },
        { id: "connections", label: "Connections", icon: <ExternalLinkIcon /> },
        { id: "notifications", label: "Notifications", icon: <BellIcon /> },
        { id: "keybinds", label: "Keybinds", icon: <KeyboardIcon /> },
    ];

    const filteredCategories = categories.filter((cat) =>
        cat.label.toLowerCase().includes(searchInputValue.toLowerCase())
    );

    const select = (category: string) => {
        setSelectedCategory(category);
        switch (category) {
            case "appearance":
                setCurrentPage(<Appearance />);
                break;
            case "general":
                setCurrentPage(<div>General Settings</div>);
                break;
            case "connections":
                setCurrentPage(<div>Connections</div>);
                break;
            case "notifications":
                setCurrentPage(<div>Notifications</div>);
                break;
            case "keybinds":
                setCurrentPage(<div>Keybinds</div>);
                break;
            default:
                setCurrentPage(<React.Fragment />);
                break;
        }
    };

    const search = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInputValue(e.target.value);
        setSelectedCategory("none");
    };

    return (
        <div
            className={`settings-container ${isVisible ? "" : "hidden"}`}
            onClick={handleClose}
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
            <div
                className="d-flex flex-row rounded-2 overflow-hidden border"
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: "960px",
                    height: "700px",
                    position: "absolute",
                    left: "max(0px, 50% - 480px)",
                    top: "50%",
                    transform: "translateY(-50%)",
                    flexShrink: 0,
                }}
            >
                <div className="border" style={{ padding: "20px", width: "260px", backgroundColor: "#242424", flexShrink: 0 }}>
                    <div className="d-flex flex-row mb-3 align-items-center">
                        <TextInput
                            className="flex-grow-1"
                            style={{ minWidth: "0" }}
                            placeholder={"Search..."}
                            value={searchInputValue}
                            onChange={search}
                        />
                        <SearchIcon />
                    </div>

                    {filteredCategories.map((cat) => (
                        <div
                            key={cat.id}
                            className={`bg-hover-effect settings-tab ${selectedCategory === cat.id ? "selected" : ""}`}
                            onClick={() => select(cat.id)}
                        >
                            {cat.icon} {cat.label}
                        </div>
                    ))}
                </div>
                <div className="p-5 border" style={{ width: "700px", backgroundColor: "#333135", flexShrink: 0 }}>
                    {currentPage}
                </div>
            </div>
        </div>
    );
};

export default Settings;
