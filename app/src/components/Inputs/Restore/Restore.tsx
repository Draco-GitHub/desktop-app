import React, { useState } from 'react';
import RotateCCW from "../../../assets/Icons/RotateCCW.tsx";

interface RestoreButtonProps {
    onRestore: (option: 'last' | 'app') => void;
}

const Restore: React.FC<RestoreButtonProps> = ({ onRestore }) => {
    const [showOptions, setShowOptions] = useState(false);

    const handleClick = () => {
        setShowOptions(!showOptions);
    };

    const handleOptionClick = (option: 'last' | 'app') => {
        onRestore(option);
        setShowOptions(false);
    };

    return (
        <div className="restore-button-container">
            <RotateCCW  onClick={handleClick}/>
            {showOptions && (
                <div className="restore-options">
                    <div className="restore-title">Restore</div>
                    <div className="restore-option" onClick={() => handleOptionClick('last')}>
                        LAST SAVE
                    </div>
                    <div className="restore-option" onClick={() => handleOptionClick('app')}>
                        APP DEFAULT
                    </div>
                </div>
            )}
        </div>
    );
};

export default Restore;
