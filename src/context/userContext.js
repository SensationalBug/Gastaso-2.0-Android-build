import { initializeApp } from "firebase/app";
import React, { createContext, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import firebaseConfig from "../firebaseConfig/firebaseConfig";
import { Alert } from "react-native";

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
      .catch((err) => {
        Alert.alert("Error", err.code);
      });
  };

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        Alert.alert(
          "Registro correcto",
          "El usuario se ha agregado de manera correcta"
        );
      })
      .catch((err) => {
        Alert.alert("Error", err.code);
      });
  };

  return (
    <UserContext.Provider value={{ user, toggleUser, signIn, signUp }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
