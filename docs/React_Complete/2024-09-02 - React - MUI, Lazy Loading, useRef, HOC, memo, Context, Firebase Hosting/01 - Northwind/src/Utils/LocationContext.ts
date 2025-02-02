import { createContext } from "react";

// Context type: 
export type Location = {
    latitude: number;
    longitude: number;
};

// Context object we want to give all components:
export const location: Location = {
    latitude: 0,
    longitude: 0
};

// Init object: 
navigator.geolocation.getCurrentPosition(position => {
    location.latitude = position.coords.latitude;
    location.longitude = position.coords.longitude;
});

// Component wrapping the tree:
export const LocationContext = createContext<Location>(location);
