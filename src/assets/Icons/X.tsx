import {IconProps} from "./IconProps.tsx";

const X = ({id, className, onClick}:IconProps) => (
    <div className={`icon-container ${className}`} id={id} onClick={onClick}>
        <svg viewBox="0 0 24 24">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
        </svg>
    </div>
)
export default X;