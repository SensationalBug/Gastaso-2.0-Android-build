import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { BillsContext } from "../context/BillsContext";
import { FlatList } from "react-native-gesture-handler";

const Historial = () => {
  const { bills, selectGastos } = useContext(BillsContext);
  return (
    // <View style={styles.historial}>
    //   <Text style={{ fontSize: 25, textAlign: "center" }}>
    //     Esta página se encuentra en mantenimiento para la versión 2.0.0 de la
    //     app
    //   </Text>
    // </View>
    <View>
      <TouchableOpacity
        onPress={() => {
          selectGastos()
        }}
      >
        <Text>Hola</Text>
      </TouchableOpacity>
      <FlatList
        data={bills}
        renderItem={(item) => {
          // console.log(item.item);
        }}
      />
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
