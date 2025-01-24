import React, {useEffect, useRef, useState} from "react";
import { invoke } from "@tauri-apps/api/core";
import CalendarProps from "./CalendarProps.tsx";

const Day: React.FC<CalendarProps> = ({}:CalendarProps) => {

    const [, setCurrentTime] = useState<Date>();
    const [direction, setDirection] = useState<"height" | "width">("width");

    async function getTime () {
        setCurrentTime(new Date(await invoke('get_current_datetime')));
    }

    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (divRef.current) {
            divRef.current.scrollTop = 0;
            divRef.current.scrollLeft = 1000;
        }

        getTime()
    }, []);

    const a = [{color:"green", length:"400px", top: "200px", left: "200px"}];

    return (
        <div ref={divRef} className="d-flex flex-column flex-grow-1 overflow-x-scroll" style={{ position: "relative" }}>
            <div className="d-flex flex-row overflow-visible my-2" style={{ minHeight: "max-content" }}>
                {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} style={{ width: "400px", flexShrink: 0, textAlign: "center" }}>
                        <span className="bg-hover-effect p-1 rounded-2" style={{ fontWeight: 700 }}>{i}:00</span>
                    </div>
                ))}
            </div>
            <div className="d-flex flex-row flex-grow-1 overflow-visible" style={{minHeight: "max-content", position: "relative"}}>
                <div className="border-end" style={{width: "200px", flexShrink: 0}}></div>
                {Array.from({length: 24}).map((_, i) => (
                    <div key={i} className="border-end" style={{width: "400px", flexShrink: 0, textAlign: "center"}}>
                    </div>
                ))}
                {a.map((styles, i) => (
                    <div className="calendar-card position-absolute d-flex flex-row" key={i} style={{backgroundColor:styles.color, [direction]: styles.length, left: styles.left, top: styles.top}}>
                        <div className="d-flex flex-row flex-grow-1">
                            <div className="d-flex flex-column">
                                <div>test</div>
                            </div>
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-column">
                                    <div style={{fontWeight: 700, fontSize: 18}}>Title</div>
                                    <div className="d-flex flex-row justify-content-between" style={{fontSize: 10}}>
                                        <div>18:00 - 19:00</div>
                                        <div>in: 2d 10h 4m 0s</div>
                                    </div>
                                </div>
                                <div style={{fontSize: 15}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );


}

export default Day;