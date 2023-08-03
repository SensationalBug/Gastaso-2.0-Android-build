import {
  gastos,
  cuentas,
  categorias,
  tipo_gastos,
  tipo_cuenta,
} from "../db/queries";
import * as SQLite from "expo-sqlite";
import React, { createContext, useState } from "react";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

export const DatabaseContext = createContext();

const DatabaseProvider = ({ children }) => {
  const db = SQLite.openDatabase("GASTASO.db");
  const [getBills, setGetBills] = useState([]);
  const [getInfo, setGetInfo] = useState(false);

  const addTipoCuenta = () => {
    const tipo_cuenta = [
      { label: "Efectivo", value: "Efectivo" },
      { label: "Cuenta de ahorro", value: "Cuenta de ahorro" },
      { label: "Cuenta corriente", value: "Cuenta corriente" },
      { label: "Tarjeta de crédito", value: "Tarjeta de crédito" },
    ];
    db.transaction((tx) => {
      tipo_cuenta.map((elem) => {
        tx.executeSql("INSERT INTO tipo_cuenta (label, value) VALUES (?,?)", [
          elem.label,
          elem.value,
        ]);
      });
    });
  };

  const addCategorias = () => {
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
    baseCategories.map((elem) => {
      db.transaction((tx) => {
        tx.executeSql("INSERT INTO categorias (nombre, icon) VALUES (?,?)", [
          elem.nombre,
          elem.iconName,
        ]);
      });
    });
  };

  const addTipoGasto = () => {
    const tiposGasto = ["Débito", "Crédito"];
    tiposGasto.map((elem) => {
      db.transaction((tx) => {
        tx.executeSql("INSERT INTO tipo_gastos (tipo) VALUES (?)", [elem]);
      });
    });
  };

  const selectGastosDB = () => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM gastos", [], (txObj, queryResult) => {
        setGetInfo(true);
        setGetBills(queryResult.rows._array);
      });
    });
  };

  const selectFlags = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM flag",
        [],
        (txObj, queryResult) => {
          if (queryResult.rows.length === 0) {
            selectGastosDB();
          }
        },
        () => createDatabaseAndTables(tx)
      );
    });
  }

  const createDatabaseAndTables = (tx) => {
    tx.executeSql(
      "CREATE TABLE flag (id INTEGER PRIMARY KEY, value TEXT)",
      [],
      () => {
        tx.executeSql(tipo_cuenta, [], addTipoCuenta());
        tx.executeSql(cuentas, []);
        tx.executeSql(categorias, [], addCategorias());
        tx.executeSql(tipo_gastos, [], addTipoGasto());
        tx.executeSql(gastos, [], () => {
          selectGastosDB();
        });
      }
    );
  };

  const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: "#1F8A70" }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 18,
        }}
      />
    ),
    error: (props) => (
      <ErrorToast
        {...props}
        style={{ borderLeftColor: "#F24C3D" }}
        text1Style={{
          fontSize: 18,
        }}
      />
    ),
    info: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: "#122e49" }}
        text1Style={{
          fontSize: 18,
        }}
      />
    ),
  };

  return (
    <DatabaseContext.Provider
      value={{
        Toast,
        getInfo,
        getBills,
        toastConfig,
        selectFlags,
        selectGastosDB,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseProvider;
