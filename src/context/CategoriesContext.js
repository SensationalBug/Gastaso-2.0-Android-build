import React, { createContext, useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";

export const CateogiesContext = createContext();

const CateogiesProvider = ({ children }) => {
  const [categories, setCatgories] = useState();

  const baseCategories = [
    { nombre: "Ahorro", iconName: "money" },
    { nombre: "Comida", iconName: "cutlery" },
    { nombre: "Teléfono", iconName: "mobile" },
    { nombre: "Facturas", iconName: "credit-card" },
    { nombre: "Ocio", iconName: "puzzle-piece" },
    { nombre: "Animales", iconName: "paw" },
    { nombre: "Salud", iconName: "heart" },
    { nombre: "Transporte", iconName: "car" },
    { nombre: "Otro", iconName: "asterisk" },
  ];

  const db = SQLite.openDatabase("GASTASO.db");

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS categorias (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(15), iconName VARCHAR(20))",
        (txObj, queryResult) => {
          baseCategories.map((elem) => {
            db.transaction((tx) => {
              tx.executeSql(
                "INSERT INTO categorias (nombre, iconName) VALUES (?,?)",
                [elem.nombre, elem.iconName],
                (txObj, queryResult) => console.log(queryResult),
                (txObj, queryError) => console.log(queryError)
              );
            });
          });
        },
        (txObj, queryError) => console.log(queryError, "Error")
      );
    });
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM categorias",
        [],
        (txObj, queryResults) => setCatgories(queryResults.rows._array),
        (txObj, queryError) => console.log(queryError)
      );
    });
  }, []);

  const selectCategory = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM categorias",
        [],
        (txObj, queryResults) => console.log(queryResults.rows._array),
        (txObj, queryError) => console.log(queryError)
      );
    });
  };

  return (
    <CateogiesContext.Provider value={{ selectCategory, categories }}>
      {children}
    </CateogiesContext.Provider>
  );
};

export default CateogiesProvider;
