import React, {
  useRef,
  useState,
  useEffect,
  useContext,
  createContext,
} from "react";
import * as SQLite from "expo-sqlite";
import { DatabaseContext } from "./DatabaseContext";

export const CateogiesContext = createContext();

const CateogiesProvider = ({ children }) => {
  const [categories, setCatgories] = useState([]);
  const dropDownAlertRef = useRef();
  const { getInfo } = useContext(DatabaseContext);
  const db = SQLite.openDatabase("GASTASO.db");

  useEffect(() => {
    if (getInfo) {
      db.transaction((tx) => {
        tx.executeSql("SELECT * FROM categorias", [], (txObj, queryResults) =>
          setCatgories(queryResults.rows._array)
        );
      });
    }
  }, [getInfo]);

  const selectCategory = () => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM categorias", [], (txObj, queryResults) =>
        setCatgories(queryResults.rows._array)
      );
    });
  };

  const insertCategory = (nombre) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO categorias (nombre, icon) values (?,?)",
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

  return (
    <CateogiesContext.Provider
      value={{
        categories,
        insertCategory,
        deteleCategory,
        dropDownAlertRef,
      }}
    >
      {children}
    </CateogiesContext.Provider>
  );
};

export default CateogiesProvider;
