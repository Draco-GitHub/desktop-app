import React, { useState } from 'react';
import "./Color.css"

interface ColorInputProps {
    onChange: (color: string) => void;
    initialColor?: string;
}

const ColorInput: React.FC<ColorInputProps> = ({ onChange, initialColor = '#000000' }) => {
    const [color, setColor] = useState<string>(initialColor);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleClick = () => {
        setIsMenuOpen(prev => !prev);
    };

    const handleColorSelect = () => {
        setColor(color);
        onChange(color);
    };

    const colorPickerMenu = (
        <div className="color-picker-menu">
            <div className="color-top-bar"></div>
            <div className="color-display"></div>
            <div className="color-selection">
                <div className="color-selector">HEX <input type="text" onChange={handleColorSelect} value={color} pattern="#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"/></div>
                <div className="color-selector"></div>
            </div>
        </div>
    )

    return (
        <div className="color-input-container">
            <button className="color-input-button" style={{ backgroundColor: color }} onClick={handleClick}></button>
            {isMenuOpen && colorPickerMenu}
        </div>
    );
};

export default ColorInput;
