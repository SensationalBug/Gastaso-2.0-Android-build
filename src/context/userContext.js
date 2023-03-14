import { initializeApp } from "firebase/app";
import React, { createContext, useState } from "react";
import {
  signOut,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Alert } from "react-native";
import database from "../db/connection";
import { set, ref } from "firebase/database";
import firebaseConfig from "../firebaseConfig/firebaseConfig";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [user, setUser] = useState(false);

  const toggleUser = () => {
    user ? setUser(false) : setUser(true);
  };

  const registerUserInDB = (userId, email) => {
    set(ref(database, `users/ ${userId}`), {
      email,
      userId,
    });
    setUser(true);
  };

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setUser(true);
      })
      .catch((err) => {
        Alert.alert("Error", err.code);
      });
  };

  const closeSession = (to) => {
    Alert.alert("Cerrar Sessión", "Está seguro que desea cerrar sessión?", [
      {
        text: "Si",
        onPress: () => {
          signOut(auth)
            .then(() => to)
            .catch(() => console.log("No se cerró la sesión"));
        },
      },
      { text: "No", onPress: () => console.log("OK Pressed") },
    ]);
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.email);
    }
  });

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert(
          "Registro correcto",
          "El usuario se ha agregado de manera correcta"
        );
        onAuthStateChanged(auth, (user) => {
          if (user) {
            registerUserInDB(user.uid, email);
          }
        });
      })
      .catch((err) => {
        Alert.alert("Error", err.code);
      });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        signIn,
        signUp,
        setUser,
        toggleUser,
        closeSession,
        onAuthStateChanged,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
