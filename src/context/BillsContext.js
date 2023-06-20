import React, { createContext, useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";

export const BillsContext = createContext();

const BillsProvider = ({ children }) => {
  const db = SQLite.openDatabase("GASTASO.db");
  const [bills, setBills] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM cuentas",
        [],
        (txObj, queryResult) => setBills(queryResult.rows._array),
        (txObj, queryError) => console.log(queryError)
      );
    });
  }, []);

  const selecCuentas = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM cuentas",
        [],
        (txObj, queryResult) => setBills(queryResult.rows._array),
        (txObj, queryError) => console.log(queryError)
      );
    });
  };

  return (
    <BillsContext.Provider value={{ bills, selecCuentas }}>
      {children}
    </BillsContext.Provider>
  );
};

export default BillsProvider;
