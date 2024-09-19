import React, {useEffect, useState} from "react";
import {invoke} from "@tauri-apps/api";

const Daily = () => {

    const [currentTime, setCurrentTime] = useState<Date>();

    async function getTime () {
        setCurrentTime(new Date(await invoke('get_current_datetime')));
    }

    useEffect(() => {
        getTime()
    }, []);


    return (<div>day</div>)
}

export default Daily;