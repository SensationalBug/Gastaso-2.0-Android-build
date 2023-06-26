import React, { useContext } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { BillsContext } from "../context/BillsContext";
import { DetailTableStyles } from "../Styles/GlobalStyles";
import { Text, TouchableOpacity, View } from "react-native";

const TableData = ({ dataContent }) => {
  const { setIsBillSelected } = useContext(BillsContext);
  return (
    <View>
      <View style={DetailTableStyles.addCuentaContainer}>
        <TouchableOpacity onPress={() => setIsBillSelected(false)}>
          <Icon name="arrowleft" color="#ffffff" size={30} />
        </TouchableOpacity>
        <Text style={DetailTableStyles.addCategoriaText}>Detalles</Text>
      </View>
      <View style={{ flexDirection: "row", backgroundColor: "#122e49" }}>
        <Text style={DetailTableStyles.tableHead}>Concepto</Text>
        <Text style={DetailTableStyles.tableHead}>Monto</Text>
      </View>
      {dataContent}
    </View>
  );
};

export default TableData;
