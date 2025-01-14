import {IconProps} from "./IconProps.tsx";

const ChevronLeft = ({id, className, onClick}:IconProps) => (
    <div className={`icon-container ${className}`} id={id} onClick={onClick}>
        <svg viewBox="0 0 24 24">
            <path d="m15 18-6-6 6-6"/>
        </svg>
    </div>
)
export default ChevronLeft;