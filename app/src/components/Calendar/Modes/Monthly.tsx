const Monthly = (currentTime:Date) => {

    return (
        <React.Fragment>
            <div className="week-days">
                <div className="week-day">Sunday</div>
                <div className="week-day">Monday</div>
                <div className="week-day">Tuesday</div>
                <div className="week-day">Wednesday</div>
                <div className="week-day">Thursday</div>
                <div className="week-day">Friday</div>
                <div className="week-day">Saturday</div>
            </div>
        </React.Fragment>
    )
}

import React, {useEffect, useState} from "react";

export default Monthly;