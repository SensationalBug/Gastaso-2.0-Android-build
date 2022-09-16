import React from "react";
import { View, Text } from "react-native";
import styles from "../subComponentes/Styles";

const Consulta = () => {
  return (
    <View style={styles.consulta}>
      <Text style={styles.texto}>
        Esta ventana se encuentra en mantenimiento para la versión{" "}
        <Text style={{ color: "red", fontWeight: "bold" }}>1.1.0.</Text>
      </Text>
    </View>
  );
};

export default Consulta;
