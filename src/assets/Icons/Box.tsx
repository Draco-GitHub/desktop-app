import {IconProps} from "./IconProps.tsx";

const SettingsElements = ({id, className, onClick}:IconProps) => (
    <div className={`icon-container ${className}`} id={id} onClick={onClick}>
        <svg viewBox="0 0 24 24">
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
            <path d="m3.3 7 8.7 5 8.7-5"/>
            <path d="M12 22V12"/>
        </svg>
    </div>
)
export default SettingsElements;
