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
  const dropDownAlertRef = useRef();
  const db = SQLite.openDatabase("GASTASO.db");
  const [categories, setCatgories] = useState([]);
  const { getInfo, Toast } = useContext(DatabaseContext);

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
        () => {
          Toast.show({
            type: "success",
            text1: "La categoría se ha agregado.",
          });
          selectCategory();
        },
        () => {
          Toast.show({
            type: "success",
            text1: "Error interno",
          })
        }
      );
    });
  };

  const deteleCategory = (id) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM categorias WHERE id = ?",
        [id],
        () => {
          Toast.show({
            type: "info",
            text1: "La categoría se ha eliminado.",
          });
          selectCategory();
        },
        () => {
          Toast.show({
            type: "error",
            text1: "Error interno",
          })
        }
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
