import React from "react";

interface TextProps {
    placeholder: string;
    value: string;
    onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

const TextInput: React.FC<TextProps> = ({placeholder, value, onChange, onFocus, onBlur}) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    )
}

export default TextInput;