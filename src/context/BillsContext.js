import React, { createContext, useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";

export const BillsContext = createContext();

const BillsProvider = ({ children }) => {
  const db = SQLite.openDatabase("GASTASO.db");
  const [bills, setBills] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE gastos (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          descripcion TEXT,
          monto REAL,
          cuenta_id INTEGER,
          categoria_id INTEGER,
          fecha DATE,
          FOREIGN KEY (cuenta_id) REFERENCES cuentas(id),
          FOREIGN KEY (categoria_id) REFERENCES categorias(id)
        )`,
        [],
        (txObj, queryResult) => console.log(queryResult),
        (txObj, queryError) => console.log(queryError)
      );
    });
  }, []);

  const insertBill = (billData) => {
    const { descripcion, monto, cuenta_id, categoria_id, fecha } = billData;
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO gastos (
        descripcion, monto, cuenta_id, categoria_id, fecha)
        values (?,?,?,?,?)`,
        [descripcion, monto, cuenta_id, categoria_id, fecha],
        (txObj, queryResult) => selectGastos(),
        (txObj, queryError) => console.log(queryError)
      );
    });
  };

  const selectGastos = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM gastos",
        [],
        (txObj, queryResult) => setBills(queryResult.rows._array),
        (txObj, queryError) => console.log(queryError)
      );
    });
  };

  const drop = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "DROP TABLE gastos",
        [],
        (txObj, queryResult) => console.log(queryResult),
        (txObj, queryError) => console.log(queryError)
      );
    });
  };

  // drop();

  return (
    <BillsContext.Provider value={{ bills, selectGastos, insertBill }}>
      {children}
    </BillsContext.Provider>
  );
};

export default BillsProvider;
