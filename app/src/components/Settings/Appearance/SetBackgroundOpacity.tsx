import React, { useState } from "react";
import RangeInput from "../../Inputs/Range/Range.tsx";
import Restore from "../../Inputs/Restore/Restore.tsx";

const SetBackgroundOpacity: React.FC = () => {
    const [opacity, setOpacity] = useState<number>(1);

    const onChange = (currentValue: number) => {
        setOpacity(currentValue);
    };

    const onMouseLeave = () => {
        console.log(opacity)
    }

    const handleRestore = (option: 'last' | 'app') => {
        console.log(`Restored to: ${option}`);
    };

    return (
        <div className="setting-item">
            <div className="setting-details">
                <div className="setting-title">Change Background Opacity</div>
                <div className="setting-description">Adjust the opacity of the background.</div>
            </div>
            <div className="setting-input range" onMouseLeave={onMouseLeave}>
                <RangeInput max={100} min={0} onChange={onChange} initialValue={1} width={150}/>
                <Restore onRestore={handleRestore}/>
            </div>

        </div>
    );
};

export default SetBackgroundOpacity;
