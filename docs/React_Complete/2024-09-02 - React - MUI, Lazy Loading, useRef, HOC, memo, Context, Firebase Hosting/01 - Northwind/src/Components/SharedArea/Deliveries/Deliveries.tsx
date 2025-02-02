import { BackgroundByHour } from "../BackgroundByHour/BackgroundByHour";
import "./Deliveries.css";

function Deliveries(): JSX.Element {
    return (
        <div className="Deliveries">
			<p>Delivery hours: 09:00 AM - 09:00 PM (Time: {new Date().toLocaleTimeString()})</p>
        </div>
    );
}

export default BackgroundByHour(Deliveries);
