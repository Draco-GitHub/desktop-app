import React, { CSSProperties } from "react";

interface TextProps {
    placeholder: string;
    value: string;
    className?: string;
    style?: CSSProperties;
    onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

const TextInput: React.FC<TextProps> = ({placeholder, value, className, style, onChange, onFocus, onBlur}) => {
    const defaultStyles: CSSProperties = {
        background: "none",
        border: "none",
        outline: "none",
    };

    return (
        <input
            type="text"
            style={{ ...defaultStyles, ...style }}
            placeholder={placeholder}
            className={className}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
};

export default TextInput;
