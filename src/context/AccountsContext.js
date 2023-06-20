import * as SQLite from "expo-sqlite";
import React, { createContext, useEffect, useRef, useState } from "react";

export const AccountsContext = createContext();

const AccountsProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);
  const db = SQLite.openDatabase("GASTASO.db");
  const dropDownAlertRef = useRef();
  const dropDownAlertRefAdd = useRef();

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
        (txObj, queryResult) => setAccounts(queryResult.rows._array),
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
          console.log(queryResult);
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
        (txObj, queryResult) => {
          dropDownAlertRef.current.alertWithType(
            "info",
            "System Info",
            "La cuenta se ha eliminado de manera correcta."
          );
          selectCuenta();
        },
        (txObj, queryError) => console.log(queryError)
      );
    });
  };

  const updateCuenta = (producto, monto, id) => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE cuentas SET producto = ?, monto = ? WHERE id = ?",
        [producto, monto, id],
        (txObj, queryResult) => {
          dropDownAlertRef.current.alertWithType(
            "info",
            "System Info",
            "La cuenta se ha editado de manera correcta."
          );
          selectCuenta();
        },
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
        (txObj, queryResult) => {
          dropDownAlertRefAdd.current.alertWithType(
            "success",
            "System Info",
            "La cuenta se ha agregado de manera correcta."
          );
          selectCuenta();
        },
        (txObj, queryError) => console.log(queryError)
      );
    });
  };

  return (
    <AccountsContext.Provider
      value={{
        accounts,
        addCuenta,
        setAccounts,
        selectCuenta,
        deleteCuenta,
        updateCuenta,
        selectCuentaId,
        dropDownAlertRef,
        dropDownAlertRefAdd,
      }}
    >
      {children}
    </AccountsContext.Provider>
  );
};

export default AccountsProvider;
