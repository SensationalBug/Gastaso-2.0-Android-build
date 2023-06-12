import React, { createContext, useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";

export const AccountsContext = createContext();

const AccountsProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([
    { accountName: "Predeterminada", amount: 0 },
  ]);

  const db = SQLite.openDatabase("GASTASO.db");

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS cuentas (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(10), monto VARCHAR(15), tipo VARCHAR(10), tipoTarjeta VARCHAR(10), fecha DATE)"
      );
    });
  });

  const selectCuenta = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM cuentas",
        [],
        (txObj, queryResult) => console.log(queryResult.rows._array),
        (txObj, queryError) => console.log(queryError)
      );
    });
  };

  const createCuenta = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS cuentas (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(10), monto VARCHAR(15), tipo VARCHAR(10), tipoTarjeta VARCHAR(10), fecha DATE)",
        (txObj, queryResult) => console.log(queryResult),
        (txObj, queryError) => console.log(queryError)
      );
    });
  };

  const deleteTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "DROP TABLE cuentas",
        [],
        (txObj, queryResult) => console.log(queryResult),
        (txObj, queryError) => console.log(queryError)
      );
    });
  };

  const addCuenta = (accountData) => {
    const { nombre, monto, tipo, tipoTarjeta, fecha } = accountData;
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO cuentas (nombre, monto, tipo, tipoTarjeta ,fecha) values (?,?,?,?,?)",
        [nombre, monto, tipo, tipoTarjeta, fecha],
        (txObj, queryResult) => console.log(queryResult),
        (txObj, queryError) => console.log(queryError)
      );
    });
  };

  return (
    <AccountsContext.Provider
      value={{ accounts, addCuenta, selectCuenta, deleteTable, createCuenta }}
    >
      {children}
    </AccountsContext.Provider>
  );
};

export default AccountsProvider;
