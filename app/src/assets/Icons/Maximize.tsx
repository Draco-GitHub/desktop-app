import {IconProps} from "./IconProps.tsx";

const Maximize = ({id, className, onClick}:IconProps) => (
    <div className={`icon-container ${className}`} id={id} onClick={onClick}>
        <svg viewBox="0 0 24 24">
            <rect width="18" height="18" x="3" y="3" rx="2"/>
        </svg>
    </div>
)
export default Maximize;