import React, { useRef } from 'react';
import "./File.css";
import {UploadIcon} from "../../../assets/Icons";

interface FileInputProps {
    onChange: (file: File | null) => void;
}

const FileInput: React.FC<FileInputProps> = ({ onChange }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        onChange(file);
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="file-input-container">
            <button onClick={handleButtonClick} className="file-input-button">
                <UploadIcon/>
                Choose a file
            </button>
            <input
                type="file"
                ref={fileInputRef}
                className="hidden-file-input"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
        </div>
    );
};

export default FileInput;
