import * as SQLite from "expo-sqlite";
import React, { createContext, useEffect, useState } from "react";
import {
  gastos,
  cuentas,
  categorias,
  tipo_gastos,
  tipo_cuenta,
} from "../db/queries";

export const DatabaseContext = createContext();

const DatabaseProvider = ({ children }) => {
  const db = SQLite.openDatabase("GASTASO.db");
  const [getBills, setGetBills] = useState([]);
  const [getInfo, setGetInfo] = useState(false);
  const [createdDB, setCreatedDB] = useState(false);

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
        setGetBills(queryResult.rows._array);
      });
    });
  };

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM flag",
        [],
        (txObj, queryResult) => {
          if (queryResult.rows.length === 0) {
            createDatabaseAndTables(tx);
          } else {
            setCreatedDB(true);
            setGetInfo(true);
            selectGastosDB();
          }
          console.log(queryResult);
        },
        () => createDatabaseAndTables(tx)
      );
    });
  }, []);

  const createDatabaseAndTables = (tx) => {
    tx.executeSql(
      "CREATE TABLE flag (id INTEGER PRIMARY KEY, value TEXT)",
      [],
      () => {
        setCreatedDB(true);
        setGetInfo(true);
        selectGastosDB();

        tx.executeSql(tipo_cuenta, [], addTipoCuenta(), (txObj, queryError) =>
          console.log(queryError)
        );

        tx.executeSql(
          cuentas,
          [],
          () => {},
          (txObj, queryError) => console.log(queryError)
        );

        tx.executeSql(categorias, [], addCategorias(), (txObj, queryError) =>
          console.log(queryError)
        );

        tx.executeSql(tipo_gastos, [], addTipoGasto(), (txObj, queryError) =>
          console.log(queryError)
        );

        tx.executeSql(
          gastos,
          [],
          () => {},
          (txObj, queryError) => console.log(queryError)
        );
      },
      () => {
        setCreatedDB(true);
        setGetInfo(true);
        selectGastosDB();
      }
    );
  };

  return (
    <DatabaseContext.Provider
      value={{ getInfo, getBills, selectGastosDB, createdDB }}
    >
      {children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseProvider;
