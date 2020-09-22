import React from "react";
import './date.styles.css';

type Event = {
    name: string;
    date: string;
}
export const Date = ({name, date}: Event) => {
    return (
        <div className="dateContainer">
            <h1>{name}</h1>
            <span>{date}</span>
        </div>
    )
}
