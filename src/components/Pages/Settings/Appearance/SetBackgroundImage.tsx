import React from "react";
import {FileInput} from "../../../Inputs";

const SetBackgroundImage: React.FC = () => {

    const handleChange = (file: File | null) => {
        console.log(file);
    };

    return (
        <div className="setting-item">
            <div className="setting-details">
                <div className="setting-title">Change Background Image</div>
                <div className="setting-description">This is a test description</div>
            </div>
            <div className="setting-input">
                <FileInput onChange={handleChange} />
            </div>
        </div>
    );
};

export default SetBackgroundImage

