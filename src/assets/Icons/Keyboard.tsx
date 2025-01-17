import {IconProps} from "./IconProps.tsx";

const Keyboard = ({id, className, onClick}:IconProps) => (
    <div className={`icon-container ${className}`} id={id} onClick={onClick}>
        <svg viewBox="0 0 24 24">
            <path d="M10 8h.01"/>
            <path d="M12 12h.01"/>
            <path d="M14 8h.01"/>
            <path d="M16 12h.01"/>
            <path d="M18 8h.01"/>
            <path d="M6 8h.01"/>
            <path d="M7 16h10"/>
            <path d="M8 12h.01"/>
            <rect width="20" height="16" x="2" y="4" rx="2"/>
        </svg>
    </div>
)
export default Keyboard;