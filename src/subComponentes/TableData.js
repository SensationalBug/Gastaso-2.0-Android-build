import React from "react";
import Icon from "react-native-vector-icons/Entypo";
import { StyleSheet, Text, View } from "react-native";

const TableData = (props) => {
  return (
    <View style={{ height: "100%" }}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.tableHead}>Fecha</Text>
        <Text style={styles.tableHead}>Concepto</Text>
        <Text style={styles.tableHead}>Monto</Text>
        <Text style={styles.delHeadButton}>
          <Icon style={styles.delBodyButtonIcon} name="trash" />
        </Text>
      </View>
      {props.dataContent}
    </View>
  );
};

export default TableData;

const styles = StyleSheet.create({
  tableHead: {
    fontSize: 20,
    width: "30%",
    color: "#fff",
    textAlign: "center",
    paddingVertical: 10,
    backgroundColor: "#122e49",
    borderRightColor: "gray",
    borderRightWidth: 2,
  },
  delHeadButton: {
    width: "10%",
    backgroundColor: "#122e49",
  },
  delBodyButtonIcon: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
});
