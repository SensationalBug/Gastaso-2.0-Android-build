import * as SQLite from "expo-sqlite";
import React, { createContext, useRef, useState } from "react";

export const BillsContext = createContext();

const BillsProvider = ({ children }) => {
  const db = SQLite.openDatabase("GASTASO.db");
  const dropDownAlertRef = useRef();
  const [bills, setBills] = useState([]);
  const [billType, setBillType] = useState([]);
  const [isPromise, setIsPromise] = useState(false);
  const [specificBills, setSpecificBills] = useState([]);
  const [isBillSelected, setIsBillSelected] = useState(false);

  const insertBill = (billData) => {
    const { id_cuenta, id_tipo_gasto, id_categoria, concepto, monto, fecha } =
      billData;
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO gastos (
        id_cuenta, id_tipo_gasto, id_categoria, concepto, monto, fecha)
        values (?,?,?,?,?,?)`,
        [id_cuenta, id_tipo_gasto, id_categoria, concepto, monto, fecha],
        () => {
          tx.executeSql("SELECT * FROM gastos", [], (txObj, queryResult) => {
            setBills(queryResult.rows._array);
            dropDownAlertRef.current.alertWithType(
              "success",
              "System Info",
              "El gasto se ha agregado de manera correcta."
            );
          });
        },
        (txObj, queryError) => {
          dropDownAlertRef.current.alertWithType(
            "error",
            "System Info",
            "Error Interno"
          );
        }
      );
    });
  };

  const selectGastos = () => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM gastos", [], (txObj, queryResult) => {
        setBills(queryResult.rows._array);
      });
    });
  };

  const selectSpecificGastos = (id_cuenta) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM gastos where id_cuenta = ?",
        [id_cuenta],
        (txObj, queryResult) => {
          setSpecificBills(queryResult.rows._array);
          setIsBillSelected(!isBillSelected);
          selectGastos();
        }
      );
    });
  };

  const selectBillType = () => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM tipo_gastos", [], (txObj, queryResult) =>
        setBillType(queryResult.rows._array)
      );
    });
  };

  const deleteBill = (data) => {
    const { id, id_cuenta } = data.item;
    db.transaction((tx) => {
      tx.executeSql("DELETE FROM gastos WHERE id = ?", [id], () => {
        tx.executeSql(
          "SELECT * FROM gastos where id_cuenta = ?",
          [id_cuenta],
          (txObj, queryResult) => {
            setSpecificBills(queryResult.rows._array);
            setIsPromise(true);
            selectGastos();
          }
        );
      });
    });
  };

  return (
    <BillsContext.Provider
      value={{
        bills,
        billType,
        insertBill,
        selectGastos,
        specificBills,
        selectBillType,
        isBillSelected,
        dropDownAlertRef,
        setSpecificBills,
        setIsBillSelected,
        selectSpecificGastos,
        deleteBill,
        isPromise,
        setIsPromise,
      }}
    >
      {children}
    </BillsContext.Provider>
  );
};

export default BillsProvider;
