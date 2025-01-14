import React, { useState } from 'react';
import { ChevronDownIcon } from "../../../assets/Icons";

interface DropdownInputProps {
    className?: string;
    dropdownItems: string[];
    onSelectionChange?: (selected: string) => void;
}

const DropdownInput: React.FC<DropdownInputProps> = ({ className, dropdownItems, onSelectionChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentSelected, setCurrentSelected] = useState<string>(dropdownItems[0]);

    const handleSelectionChange = (item: string) => {
        setCurrentSelected(item);
        onSelectionChange && onSelectionChange(item);
        setIsOpen(false);
    };

    return (
        <div
            className={`d-flex flex-row rounded-1 justify-content-center align-items-center ${className}`}
            style={{ paddingLeft: "10px" }}
            onClick={() => setIsOpen((prev) => !prev)}
        >
            {currentSelected}
            <ChevronDownIcon />
            {isOpen && (
                <div className="d-flex flex-column" style={{ position: 'absolute' }}>
                    {dropdownItems.map((item, index) => (
                        <div key={index} onClick={() => handleSelectionChange(item)}>
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropdownInput;
