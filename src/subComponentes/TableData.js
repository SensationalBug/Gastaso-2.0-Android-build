import React, { useContext, useEffect } from "react";
import Icon from "react-native-vector-icons/Entypo";
import { BillsContext } from "../context/BillsContext";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TableData = ({ dataContent }) => {
  const navigation = useNavigation();
  const { setIsBillSelected, setSpecificBills } = useContext(BillsContext);

  return (
    <View>
      <View style={styles.addCuentaContainer}>
        <TouchableOpacity
          onPress={() => {
            // navigation.goBack();
            // setSpecificBills([]);
            setIsBillSelected(false);
          }}
        >
          <Icon name="arrow-left" color="#ffffff" size={30} />
        </TouchableOpacity>
        <Text style={styles.addCategoriaText}>Añadir Producto</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.tableHead}>Concepto</Text>
        <Text style={styles.tableHead}>Monto</Text>
        <Text style={styles.delHeadButton}>
          <Icon style={styles.delBodyButtonIcon} name="chevron-thin-down" />
        </Text>
      </View>
      {dataContent}
    </View>
  );
};

export default TableData;

const styles = StyleSheet.create({
  addCuentaContainer: {
    padding: 15,
    flexDirection: "row",
    backgroundColor: "#122e49",
  },
  addCategoriaText: { color: "#ffffff", fontSize: 20, marginHorizontal: 20 },
  tableHead: {
    fontSize: 20,
    width: "45%",
    color: "#fff",
    textAlign: "center",
    paddingVertical: 10,
    backgroundColor: "#122e49",
    borderRightColor: "gray",
    borderRightWidth: 2,
  },
  delHeadButton: {
    width: "10%",
    textAlign: "center",
    verticalAlign: "middle",
    backgroundColor: "#122e49",
  },
  delBodyButtonIcon: {
    fontSize: 20,
    color: "#fff",
    alignContent: "center",
  },
});
