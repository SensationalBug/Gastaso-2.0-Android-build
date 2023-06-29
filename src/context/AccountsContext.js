import * as SQLite from "expo-sqlite";
import React, {
  useRef,
  useState,
  useEffect,
  useContext,
  createContext,
} from "react";
import { DatabaseContext } from "./DatabaseContext";

export const AccountsContext = createContext();

const AccountsProvider = ({ children }) => {
  const dropDownAlertRef = useRef();
  const dropDownAlertRefAdd = useRef();
  const db = SQLite.openDatabase("GASTASO.db");
  const [accounts, setAccounts] = useState([]);
  const { getInfo } = useContext(DatabaseContext);
  const [accountType, setAccountType] = useState([]);

  const formatter = new Intl.NumberFormat("es-DO", {
    style: "currency",
    currency: "DOP",
  });

  useEffect(() => {
    if (getInfo) {
      db.transaction((tx) => {
        tx.executeSql("SELECT * FROM tipo_cuenta", null, (txObj, queryResult) =>
          setAccountType(queryResult.rows._array)
        );
        tx.executeSql("SELECT * FROM cuentas", null, (txObj, queryResult) =>
          setAccounts(queryResult.rows._array)
        );
      });
    }
  }, [getInfo]);

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
      tx.executeSql("SELECT * FROM cuentas", [], (txObj, queryResult) =>
        setAccounts(queryResult.rows._array)
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
        "UPDATE cuentas SET producto = ?, monto_inicial = ? WHERE id = ?",
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
    const { producto, monto_inicial, id_tipo_cuenta, fecha } = accountData;
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO cuentas (producto, monto_inicial, id_tipo_cuenta, fecha) values (?,?,?,?)",
        [producto, monto_inicial, id_tipo_cuenta, fecha],
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
        formatter,
        addCuenta,
        accountType,
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
