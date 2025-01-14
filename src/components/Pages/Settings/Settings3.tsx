import React, {useEffect, useState} from 'react';
import {BellIcon, BrushIcon, CircleXIcon, EllipsisIcon, ExternalLinkIcon, InfoIcon, SearchIcon} from "../../../assets/Icons";
import "./Settings3.css"
import {Appearance} from "./Appearance";
import TextInput from "../../Inputs/Text/Text.tsx";


const Settings3: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("appearance");
    const [isSearchSelected, setSearchSelected] = useState<boolean>(false);
    const [searchInputValue, setSearchInputValue] = useState<string>("");

    const search = (input: React.ChangeEvent<HTMLInputElement>) => {
        const value = input.target.value;
        setSearchInputValue(value);
        setSelectedCategory("none");
    };

    useEffect(() => {
        setSelectedCategory("appearance");
    }, []);

    const getContent = () => {
        switch (selectedCategory) {
            case "appearance":
                return <Appearance/>
            default:
                return <React.Fragment/>
        }
    }

    return (
        <div className="settings-view">
            <div className="sidebar-region" style={{width: "35vw"}}>
                <div className="sidebar-region-scroller">
                    <div className="sidebar-category-title">APP SETTINGS</div>
                    <div className={`sidebar-category ${selectedCategory === "appearance" ? 'selected' : ''}`} onClick={() => setSelectedCategory('appearance')}>
                        <BrushIcon/>
                        Appearance
                    </div>
                    <div className={`sidebar-category ${selectedCategory === "connections" ? 'selected' : ''}`} onClick={() => setSelectedCategory('connections')}>
                        <ExternalLinkIcon/>
                        Connections
                    </div>
                    <div className={`sidebar-category ${selectedCategory === "notifications" ? 'selected' : ''}`} onClick={() => setSelectedCategory('notifications')}>
                        <BellIcon/>
                        Notifications
                    </div>
                    <div className={`sidebar-category ${selectedCategory === "advanced" ? 'selected' : ''}`} onClick={() => setSelectedCategory('advanced')}>
                        <EllipsisIcon/>
                        Advanced
                    </div>
                    <div className="separator-h"></div>
                    <div className={`sidebar-category ${selectedCategory === "about" ? 'selected' : ''}`} onClick={() => setSelectedCategory('about')}>
                        <InfoIcon/>
                        About
                    </div>
                </div>
            </div>
            <div className="content-region">
                <div className="sidebar-content-column" style={{ paddingTop: '45px' }}>
                    <div className={`search-bar ${isSearchSelected ? 'selected' : ''}`}>
                        <SearchIcon onClick={() => setSearchInputValue("")}/>
                        <TextInput
                            placeholder={"Search..."}
                            value={searchInputValue}
                            onChange={search}
                            onFocus={()=>setSearchSelected(true)}
                            onBlur={()=>setSearchSelected(true)}/>
                        <CircleXIcon onClick={()=> setSearchInputValue("")}/>
                    </div>
                    {getContent()}
                </div>
            </div>
        </div>
    );
};

export default Settings3;
