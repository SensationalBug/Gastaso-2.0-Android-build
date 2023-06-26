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
  const [getInfo, setGetInfo] = useState(false);
  const db = SQLite.openDatabase("GASTASO.db");

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

  const selectGastos = () => {
    
  }

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        tipo_cuenta,
        [],
        () => {
          addTipoCuenta();
          tx.executeSql(cuentas, [], () => {
            tx.executeSql(categorias, [], () => {
              addCategorias();
              tx.executeSql(tipo_gastos, [], () => {
                addTipoGasto();
                tx.executeSql(gastos, [], () => setGetInfo(true));
              });
            });
          });
        },
        () => setGetInfo(true)
      );
    });
  },[]);

  return (
    <DatabaseContext.Provider value={{ getInfo }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseProvider;
