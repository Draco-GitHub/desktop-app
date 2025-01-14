import React, {useEffect, useState} from "react";
import { invoke } from "@tauri-apps/api/core";
import CalendarProps from "./CalendarProps.tsx";

const Day: React.FC<CalendarProps> = ({}:CalendarProps) => {

    const [, setCurrentTime] = useState<Date>();

    async function getTime () {
        setCurrentTime(new Date(await invoke('get_current_datetime')));
    }

    useEffect(() => {
        getTime()
    }, []);

    const hours = []
    for (let i = 0; i < 24; i++) {
        hours.push();
    }


    return (
        <div></div>
    )
}

export default Day;