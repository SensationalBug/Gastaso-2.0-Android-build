import { initializeApp } from "firebase/app";
import React, { createContext, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import firebaseConfig from "../firebaseConfig/firebaseConfig";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [user, setUser] = useState(false);

  const toggleUser = () => {
    user ? setUser(false) : setUser(true);
  };

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <UserContext.Provider value={{ user, toggleUser, signIn, signUp }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
