import React, {ReactNode} from "react";
import SetBackgroundImage from "./SetBackgroundImage.tsx";
import SetBackgroundOpacity from "./SetBackgroundOpacity.tsx";
import SetBackgroundColor from "./SetBackgroundColor.tsx";

export const Appearance = () => {
    return (
        <React.Fragment>
            <SetBackgroundImage/>
            <SetBackgroundColor/>
            <SetBackgroundOpacity/>
        </React.Fragment>
    )
}

interface Settings {
    node: ReactNode,
    category: string,
    keys: string[]
}

export const Settings: Settings[] = [
    {node: <SetBackgroundImage/>, category:"appearance", keys: ["set", "change", "background", "image"]},
    {node: <SetBackgroundColor/>, category:"appearance", keys: ["set", "change", "background", "color", "colour"]},
    {node: <SetBackgroundOpacity/>, category:"appearance", keys: ["set", "change", "background", "opacity"]}
]