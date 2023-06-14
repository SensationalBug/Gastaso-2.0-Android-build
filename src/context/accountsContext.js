import React, { createContext, useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";

export const AccountsContext = createContext();

const AccountsProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);

  const db = SQLite.openDatabase("GASTASO.db");

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS cuentas (id INTEGER PRIMARY KEY AUTOINCREMENT, producto VARCHAR(10), monto VARCHAR(15), tipo VARCHAR(10), tipoTarjeta VARCHAR(10), fecha DATE)"
      );
    });
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM cuentas",
        null,
        (txObj, queryResult) => setAccounts(queryResult.rows._array),
        (txObj, queryError) => console.log(queryError)
      );
    });
  }, []);

  const selectCuentaId = (id) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM cuentas WHERE id = ?",
        [id],
        (txObj, queryResult) => {
          setAccounts(queryResult.rows._array);
        },
        (txObj, queryError) => console.log(queryError)
      );
    });
  };

  const selectCuenta = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM cuentas",
        [],
        (txObj, queryResult) => {
          setAccounts(queryResult.rows._array);
        },
        (txObj, queryError) => console.log(queryError)
      );
    });
  };

  const deleteCuenta = (id) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM cuentas WHERE id = ?",
        [id],
        (txObj, queryResult) => selectCuenta(),
        (txObj, queryError) => console.log(queryError)
      );
    });
  };

  const deleteTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "DROP TABLE cuentas",
        [],
        (txObj, queryResult) => setAccounts(queryResult.rows._array),
        (txObj, queryError) => console.log(queryError)
      );
    });
  };

  const addCuenta = (accountData) => {
    const { producto, monto, tipo, tipoTarjeta, fecha } = accountData;
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO cuentas (producto, monto, tipo, tipoTarjeta ,fecha) values (?,?,?,?,?)",
        [producto, monto, tipo, tipoTarjeta, fecha],
        (txObj, queryResult) => selectCuenta(),
        (txObj, queryError) => console.log(queryError)
      );
    });
  };

  const createCuenta = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS cuentas (id INTEGER PRIMARY KEY AUTOINCREMENT, producto VARCHAR(10), monto VARCHAR(15), tipo VARCHAR(10), tipoTarjeta VARCHAR(10), fecha DATE)",
        (txObj, queryResult) => console.log(queryResult),
        (txObj, queryError) => console.log(queryError)
      );
    });
  };

  return (
    <AccountsContext.Provider
      value={{
        accounts,
        addCuenta,
        selectCuenta,
        deleteTable,
        createCuenta,
        setAccounts,
        deleteCuenta,
        selectCuentaId,
      }}
    >
      {children}
    </AccountsContext.Provider>
  );
};

export default AccountsProvider;
