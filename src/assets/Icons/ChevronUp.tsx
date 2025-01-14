import {IconProps} from "./IconProps.tsx";

const ChevronUp = ({id, className, onClick}:IconProps) => (
    <div className={`icon-container ${className}`} id={id} onClick={onClick}>
        <svg viewBox="0 0 24 24">
            <path d="m18 15-6-6-6 6"/>
        </svg>
    </div>
)
export default ChevronUp;