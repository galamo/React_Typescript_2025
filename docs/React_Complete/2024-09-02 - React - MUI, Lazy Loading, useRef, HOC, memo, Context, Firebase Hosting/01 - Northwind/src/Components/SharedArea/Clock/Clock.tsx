import { useEffect, useState } from "react";
import "./Clock.css";
import DayPartIcon from "../DayPartIcon/DayPartIcon";

export function Clock(): JSX.Element {

    const [time, setTime] = useState<string>("");

    useEffect(() => {

        // This code will run only once - when component start:
        const timerId = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString());
        }, 1000);

        // The return function from useEffect will be called when the component destroyed:
        return () => clearInterval(timerId);

    }, []); // [] --> run function only once - when component start.

    return (
        <div className="Clock">
            <span>{time}</span>
            <DayPartIcon hour={new Date().getHours()} />
        </div>
    );
}
