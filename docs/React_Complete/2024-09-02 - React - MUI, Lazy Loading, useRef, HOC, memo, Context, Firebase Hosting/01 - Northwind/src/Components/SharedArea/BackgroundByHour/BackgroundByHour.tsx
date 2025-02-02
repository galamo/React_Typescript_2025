import { FC } from "react";
import "./BackgroundByHour.css";

// Higher Order Component (HOC):
export function BackgroundByHour(InnerComponent: FC): FC {

    function getColorByHour(): string {
        const now = new Date();
        let hour = now.getHours();
        if(hour > 12) hour = 24 - hour;
        const hue = Math.floor(hour * 255 / 12);
        const color = `rgb(${hue},${hue},${hue})`;
        return color;
    }

    const OuterComponent = function (): JSX.Element {
        return (
            <div className="BackgroundByHour" style={{ backgroundColor: getColorByHour() }}>
                <InnerComponent />
            </div>
        );
    }

    return OuterComponent;
}
