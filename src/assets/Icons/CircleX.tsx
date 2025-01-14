import {IconProps} from "./IconProps.tsx";

const CircleX = ({id, className, onClick}:IconProps) => (
    <div className={`icon-container ${className}`} id={id} onClick={onClick}>
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/>
            <path d="M15 9L9 15"/>
            <path d="M9 9L15 15"/>
        </svg>
    </div>
)
export default CircleX;