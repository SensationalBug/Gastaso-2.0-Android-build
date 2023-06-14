import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Consulta = () => {
  return (
    <View style={styles.consulta}>
      <Text style={{ fontSize: 25, textAlign: "center" }}>
        Esta página se encuentra en mantenimiento para la versión 2.0.0 de la
        app
      </Text>
    </View>
  );
};

export default Consulta;

const styles = StyleSheet.create({
  consulta: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  texto: { fontSize: 30, textAlign: "justify" },
});
