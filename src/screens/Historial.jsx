import React, { useContext } from "react";
import { BillsContext } from "../context/BillsContext";
import { FlatList } from "react-native-gesture-handler";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DetailTableStyles, HomeStyles } from "../Styles/GlobalStyles";
import Icon from "react-native-vector-icons/Entypo";

const Historial = () => {
  const { bills, selectGastos } = useContext(BillsContext);
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Text style={HomeStyles.mainTitle}>Historial Global</Text>
        <TouchableOpacity
          style={DetailTableStyles.delButton}
          onPress={() => {}}
        >
          <Icon size={30} color="#000" name="ccw" />
        </TouchableOpacity>
      </View>
      <View>
        <View style={{ flexDirection: "row", backgroundColor: "#122e49" }}>
          <Text style={{ width: "25%", fontSize: 18, color: "#fff" }}>
            Concepto
          </Text>
          <Text style={{ width: "25%", fontSize: 18, color: "#fff" }}>
            Monto
          </Text>
          <Text style={{ width: "25%", fontSize: 18, color: "#fff" }}>
            Categoria
          </Text>
          <Text style={{ width: "25%", fontSize: 18, color: "#fff" }}>
            Fecha
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Historial;

const styles = StyleSheet.create({
  historial: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  texto: { fontSize: 30, textAlign: "justify" },
});
