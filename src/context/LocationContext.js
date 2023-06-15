import React, { createContext, useState } from "react";

export const LocationContext = createContext();

const LocationProvider = ({children}) => {
  const [location, setLocation] = useState("");

  const handleLocation = (value) => {
    setLocation(value);
  };
  return (
    <LocationContext.Provider value={{ location, handleLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
