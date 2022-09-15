import React from "react";
import styles from "./Styles";
import { View, Text } from "react-native";

const TableData = (props) => {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.tableHead}>Fecha</Text>
        <Text style={styles.tableHead}>Concepto</Text>
        <Text style={styles.tableHead}>Monto</Text>
        <Text style={styles.delHeadButton}></Text>
      </View>
      {props.dataContent}
    </View>
  );
};

export default TableData;
