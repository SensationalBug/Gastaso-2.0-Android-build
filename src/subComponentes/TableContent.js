import React from "react";
import Icon from "react-native-vector-icons/Entypo";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TableContent = (props) => {
  const { id, concepto, monto } = props;
  return (
    <View key={id} style={{ flexDirection: "row" }}>
      <Text style={styles.tableBody}>{id}</Text>
      <Text style={styles.tableBody}>{concepto}</Text>
      <Text style={styles.tableBody}>{monto}</Text>
      <TouchableOpacity
        style={styles.delBodyButton}
        onPress={() => console.log(id)}
      >
        <Icon style={styles.delBodyButtonIcon} name="trash" />
      </TouchableOpacity>
    </View>
  );
};

export default TableContent;

const styles = StyleSheet.create({
  tableBody: {
    fontSize: 18,
    width: "30%",
    color: "#fff",
    borderWidth: 1,
    paddingVertical: 8,
    textAlign: "center",
    borderColor: "#122e49",
    backgroundColor: "#20a5d8",
  },
  delBodyButton: {
    width: "10%",
    borderWidth: 1,
    paddingVertical: 8,
    borderColor: "#122e49",
    backgroundColor: "#20a5d8",
  },
});
