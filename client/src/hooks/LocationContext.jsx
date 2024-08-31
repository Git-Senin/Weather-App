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
        setLocation(newLocation);
    }

    return (
        <LocationContext.Provider value={location}>
            <LocationUpdateContext.Provider value={changeLocation}>
                {children}
            </LocationUpdateContext.Provider>
        </LocationContext.Provider>
    );
}
