import React, { useContext } from "react";
import Icon from "react-native-vector-icons/Entypo";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AccountsContext } from "../context/AccountsContext";

const TableContent = (props) => {
  const { id_cuenta, id_tipo_gasto, id_categoria, concepto, monto, fecha } =
    props;
  const { formatter } = useContext(AccountsContext);
  return (
    <View key={id_cuenta} style={{ flexDirection: "row" }}>
      <Text style={styles.tableBody}>{concepto}</Text>
      <Text style={styles.tableBody}>{formatter.format(monto)}</Text>
      <TouchableOpacity
        style={styles.delBodyButton}
        onPress={() => console.log(props)}
      >
        <Icon
          style={styles.delBodyButtonIcon}
          name="chevron-thin-down"
          size={20}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
};

export default TableContent;

const styles = StyleSheet.create({
  tableBody: {
    fontSize: 18,
    width: "45%",
    color: "#fff",
    borderLeftWidth: 1,
    paddingVertical: 10,
    borderBottomWidth: 1,
    textAlign: "center",
    borderColor: "#122e49",
    backgroundColor: "#20a5d8",
  },
  delBodyButton: {
    width: "10%",
    borderLeftWidth: 1,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#122e49",
    backgroundColor: "#20a5d8",
    justifyContent: "center",
    alignItems: "center",
  },
});
