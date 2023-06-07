import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const toggleUser = () => {
    user ? setUser(false) : setUser(true);
  };

  return (
    <UserContext.Provider value={{ toggleUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
