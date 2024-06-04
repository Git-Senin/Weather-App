import { createContext, useContext, useState } from "react";

const LocationContext = createContext();
const LocationUpdateContext = createContext();

export function useLocation() {
    return useContext(LocationContext);
}

export function useLocationUpdate() {
    return useContext(LocationUpdateContext);
}

export function LocationProvider({children}){
    const [location, setLocation] = useState("Los Angeles");

    function changeLocation(newLocation) {
        console.log(`Changing Location to ${newLocation}`)
        setLocation(newLocation);
        console.log(`Location is set to ${location}`)
    }

    return (
        <LocationContext.Provider value={location}>
            <LocationUpdateContext.Provider value={changeLocation}>
                {children}
            </LocationUpdateContext.Provider>
        </LocationContext.Provider>
    );
}
