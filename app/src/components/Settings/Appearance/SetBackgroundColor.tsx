import React, {useState} from "react";
import ColorInput from "../../Inputs/Color/Color.tsx";
import Restore from "../../Inputs/Restore/Restore.tsx";

const SetBackgroundColor: React.FC = () => {
    const [color, setColor] = useState<string>("#ffffff");

    const handleColorChange = (color: string) => {
        setColor(color);
    };

    const handleRestore = (option: 'last' | 'app') => {
        console.log(`Restored to: ${option}`);
    };

    return (
        <div className="setting-item">
            <div className="setting-details">
                <div className="setting-title">Change the background color</div>
                <div className="setting-description">This is a test description</div>
            </div>
            <div className="setting-input color">
                <ColorInput onChange={handleColorChange} initialColor={color}></ColorInput>
                <Restore onRestore={handleRestore}/>
            </div>
        </div>
    );
};

export default SetBackgroundColor;