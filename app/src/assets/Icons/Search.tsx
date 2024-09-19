import {IconProps} from "./IconProps.tsx";

const Search = ({id, className, onClick}:IconProps) => (
    <div className={`icon-container ${className}`} id={id} onClick={onClick}>
        <svg viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
        </svg>
    </div>
)
export default Search;