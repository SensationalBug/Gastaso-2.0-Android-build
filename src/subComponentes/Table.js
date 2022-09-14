import React from "react";
import { Text, View } from "react-native";
import { FAB } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Entypo";
import { Table, Row, Rows } from "react-native-table-component";

const deleteItem = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <FAB
        style={{
          width: 30,
          height: 30,
          marginVertical: 5,
          alignItems: "center",
          backgroundColor: "green",
          justifyContent: "center",
        }}
        icon={(props) => <Icon name="plus" {...props} />}
      />
      <FAB
        style={{
          width: 30,
          height: 30,
          marginVertical: 5,
          alignItems: "center",
          backgroundColor: "red",
          justifyContent: "center",
        }}
        icon={(props) => <Icon name="plus" {...props} />}
      />
    </View>
  );
};

const TableData = () => {
  const data = {
    tableHead: ["Fecha", "Concepto", "Monto", "Eliminar"],
    tableData: [
      ["30/09/2022", "Comida", "999,999.00", deleteItem()],
      ["25/09/2022", "Pago de prestamo", "999,999.00", deleteItem()],
      ["28/09/2022", "Pasaje", "999,999.00", deleteItem()],
      ["09/09/2022", "WhatacatapitusBerry", "999,999.00", deleteItem()],
      ["30/09/2022", "Comida", "999,999.00", deleteItem()],
      ["25/09/2022", "Pago de prestamo", "999,999.00", deleteItem()],
      ["28/09/2022", "Pasaje", "999,999.00", deleteItem()],
      ["09/09/2022", "WhatacatapitusBerry", "999,999.00", deleteItem()],
      ["30/09/2022", "Comida", "999,999.00", deleteItem()],
      ["25/09/2022", "Pago de prestamo", "999,999.00", deleteItem()],
      ["28/09/2022", "Pasaje", "999,999.00", deleteItem()],
      ["09/09/2022", "WhatacatapitusBerry", "999,999.00", deleteItem()],
      ["30/09/2022", "Comida", "999,999.00", deleteItem()],
      ["25/09/2022", "Pago de prestamo", "999,999.00", deleteItem()],
      ["28/09/2022", "Pasaje", "999,999.00", deleteItem()],
      ["09/09/2022", "WhatacatapitusBerry", "999,999.00", deleteItem()],
    ],
  };
  return (
    <View>
      <Table
        borderStyle={{
          borderWidth: 1,
          borderColor: "#122e49",
        }}
      >
        <Row
          data={data.tableHead}
          style={{ backgroundColor: "#122e49" }}
          textStyle={{
            height: 30,
            fontSize: 20,
            color: "#fff",
            textAlign: "center",
          }}
        />
        <Rows
          style={{ backgroundColor: "#20a5d8" }}
          textStyle={{
            fontSize: 15,
            paddingVertical: 5,
            textAlign: "center",
          }}
          data={data.tableData}
        />
      </Table>
    </View>
  );
};

export default TableData;
