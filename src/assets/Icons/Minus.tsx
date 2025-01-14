import {IconProps} from "./IconProps.tsx";

const Minus = ({id, className, onClick}:IconProps) => (
    <div className={`icon-container ${className}`} id={id} onClick={onClick}>
        <svg viewBox="0 0 24 24">
            <path d="M5 12h14"/>
        </svg>
    </div>
)
export default Minus;