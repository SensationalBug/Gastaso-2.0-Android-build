import React, { createContext, useEffect, useRef, useState } from "react";
import * as SQLite from "expo-sqlite";

export const CateogiesContext = createContext();

const CateogiesProvider = ({ children }) => {
  const [categories, setCatgories] = useState();
  const dropDownAlertRef = useRef();

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
        "CREATE TABLE categorias (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(15), iconName VARCHAR(20))",
        [],
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
        }
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
        (txObj, queryResults) => setCatgories(queryResults.rows._array),
        (txObj, queryError) => console.log(queryError)
      );
    });
  };

  const insertCategory = (nombre) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO categorias (nombre, iconName) values (?,?)",
        [nombre, "asterisk"],
        (txObj, queryResults) => {
          dropDownAlertRef.current.alertWithType(
            "success",
            "System Info",
            "La categoría se ha agregado de manera correcta."
          );
          selectCategory();
        },
        (txObj, queryError) =>
          dropDownAlertRef.current.alertWithType(
            "error",
            "System Info",
            "Error interno"
          )
      );
    });
  };

  const deteleCategory = (id) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM categorias WHERE id = ?",
        [id],
        (txObj, queryResults) => {
          dropDownAlertRef.current.alertWithType(
            "info",
            "System Info",
            "La categoría se ha eliminado de manera correcta."
          );
          selectCategory();
        },
        (txObj, queryError) =>
          dropDownAlertRef.current.alertWithType(
            "error",
            "System Info",
            "Error interno"
          )
      );
    });
  };

  const delAllCategory = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "DROP TABLE categorias",
        [],
        (txObj, queryResults) => console.log(queryResults),
        (txObj, queryError) => console.log(queryError)
      );
    });
  };

  return (
    <CateogiesContext.Provider
      value={{
        selectCategory,
        categories,
        insertCategory,
        dropDownAlertRef,
        deteleCategory,
        delAllCategory,
      }}
    >
      {children}
    </CateogiesContext.Provider>
  );
};

export default CateogiesProvider;
