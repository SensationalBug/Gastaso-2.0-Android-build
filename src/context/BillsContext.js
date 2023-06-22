import React, { createContext, useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";

export const BillsContext = createContext();

const BillsProvider = ({ children }) => {
  const db = SQLite.openDatabase("GASTASO.db");
  const [bills, setBills] = useState([]);

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
      tx.executeSql("DROP TABLE tipo_cuenta");
      tx.executeSql("DROP TABLE cuentas");
      tx.executeSql("DROP TABLE categorias");
      tx.executeSql("DROP TABLE tipo_gastos");
      tx.executeSql("DROP TABLE gastos");
    });
  };
  const select = () => {
    // db.transaction((tx) => {
    //   tx.executeSql(
    //     "SELECT name FROM sqlite_master WHERE type='table'",
    //     null,
    //     (txObj, queryResult) => console.log("Tables", queryResult.rows._array)
    //   );
    //   tx.executeSql("SELECT * FROM tipo_cuenta", null, (txObj, queryResult) =>
    //     console.log("tipo_cuenta", queryResult)
    //   );
    //   tx.executeSql("SELECT * FROM cuentas", null, (txObj, queryResult) =>
    //     console.log("cuentas", queryResult)
    //   );
    //   tx.executeSql("SELECT * FROM categorias", null, (txObj, queryResult) =>
    //     console.log("categoria", queryResult)
    //   );
    //   tx.executeSql("SELECT * FROM tipo_gastos", null, (txObj, queryResult) =>
    //     console.log("tipo_gastos", queryResult)
    //   );
    //   tx.executeSql("SELECT * FROM gastos", null, (txObj, queryResult) =>
    //     console.log("gastos", queryResult)
    //   );
    // });
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM tipo_cuenta", null, (txObj, queryResult) =>
        console.log("cuentas", queryResult)
      );
    });
  };

  return (
    <BillsContext.Provider
      value={{ bills, selectGastos, insertBill, drop, select }}
    >
      {children}
    </BillsContext.Provider>
  );
};

export default BillsProvider;
