import "./Range.css";
import React, { useRef, useState } from "react";

interface RangeSliderProps {
    min: number;
    max: number;
    step?: number;
    initialValue?: number;
    width?: number;
    height?: number;
    onChange?: (currentValue: number) => void;
}

const RangeInput = ({min, max, step = 1, initialValue = min, width, height = 40, onChange}: RangeSliderProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [currentValue, setCurrentValue] = useState<number>(initialValue); // Use initialValue in useState

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        setCurrentValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <div className="range-slider-container" style={{ width: width, height: height }}>
            <div className="range-slider-value">{currentValue}</div>
            <input
                style={{width:'100%'}}
                type="range"
                ref={inputRef}
                value={currentValue}
                min={min}
                max={max}
                step={step}
                onChange={handleChange}
            />
        </div>
    );
};

export default RangeInput;
