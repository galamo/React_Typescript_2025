import { useContext } from "react";
import "./UserLocation.css";
import { LocationContext } from "../../../Utils/LocationContext";

export function UserLocation(): JSX.Element {

    // Get context object: 
    const location = useContext(LocationContext);
    
    return (
        <div className="UserLocation">
			<span>Latitude: {location.latitude}, Longitude: {location.longitude}</span>
        </div>
    );
}
