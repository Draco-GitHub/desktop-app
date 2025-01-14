import {IconProps} from "./IconProps.tsx";

const CircleCheck = ({id, className, onClick}:IconProps) => (
    <div className={`icon-container ${className}`} id={id} onClick={onClick}>
        <svg viewBox="0 0 24 24">
            <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
            <path d="m9 11 3 3L22 4"/>
        </svg>
    </div>
)
export default CircleCheck;